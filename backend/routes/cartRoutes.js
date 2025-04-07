import express from "express";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

//helper function
const getCart = async (userId, guestId) => {
  if (userId) {
    return await Cart.findOne({ user: userId });
  } else if (guestId) {
    return await Cart.findOne({ guest: guestId });
  }

  return null;
};

// @route POST /api/cart
// @desc Add product to cart for a guest or logged in user
// @access public

router.post("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cart = await getCart(userId, guestId);

    if (cart) {
      const productIndex = cart.products.findIndex(
        (p) =>
          p.productId.toString() === productId &&
          p.size === size &&
          p.color === color
      );

      if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({
          productId,
          name: product.name,
          image: product.images[0].url,
          price: product.price,
          size,
          color,
          quantity,
        });
      }

      // update total price
      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      await cart.save();
      return res.status(201).json(cart);
    } else {
      // create a new cart for the guest or user
      const newCart = await Cart.create({
        user: userId ? userId : undefined,
        guest: guestId ? guestId : "guest_" + new Date().getTime(),
        products: [
          {
            productId,
            name: product.name,
            image: product.images[0].url,
            price: product.price,
            size,
            color,
            quantity,
          },
        ],
        totalPrice: product.price * quantity,
      });
      return res.status(201).json(newCart);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// @route PUT /api/cart
// @desc Update cart for a guest or logged in user
// @access public

router.put("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;
  try {
    let cart = await getCart(userId, guestId);

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color
    );
    if (productIndex > -1) {
      if (quantity > 0) {
        cart.products[productIndex].quantity = quantity;
      } else {
        cart.products.splice(productIndex, 1); // remove the product if quantity is 0
      }

      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      await cart.save();
      return res.status(201).json(cart);
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// @route DELETE /api/cart
// @desc Delete cart
// @access public

router.delete("/", async (req, res) => {
  const { productId, size, color, guestId, userId } = req.body;
  try {
    let cart = await getCart(userId, guestId);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color
    );

    if (productIndex > -1) {
      cart.products.splice(productIndex, 1); // remove the product if quantity is 0
      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      await cart.save();
      return res.status(201).json(cart);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// @route GET /api/cart
// @desc Get cart
// @access public

router.get("/", async (req, res) => {
  const { guestId, userId } = req.query;
  try {
    const cart = await getCart(userId, guestId);
    if (cart) {
      return res.status(201).json(cart);
    } else {
      return res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// @route POST /api/car/merge
// @desc Merge guest cart into user cart on login
// @access Private

router.post("/merge", authMiddleware, async (req, res) => {
  const { guestId } = req.body;
  try {
    const guestCart = await Cart.findOne({ guest: guestId });
    const userCart = await Cart.findOne({ user: req.user._id });

    if (guestCart) {
      if (guestCart.products.length === 0) {
        return res.status(400).json({ message: "Guest cart is empty" });
      }

      if (userCart) {
        guestCart.products.forEach((guestItem) => {
          const productIndex = userCart.products.findIndex(
            (item) =>
              item.productId.toString() === guestItem.productId.toString() &&
              item.size === guestItem.size &&
              item.color === guestItem.color
          );

          if (productIndex > -1) {
            userCart.products[productIndex].quantity += guestItem.quantity;
          } else {
            userCart.products.push(guestItem);
          }
        });

        userCart.totalPrice = userCart.products.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );

        await userCart.save();
        try {
          await Cart.findByIdAndDelete(guestCart._id);
        } catch (error) {
          console.error(error);
          res.status(500).send("Error deleting guest cart");
        }

        return res.status(201).json(userCart);
      } else {
        guestCart.user = req.user._id;
        guestCart.guestId = undefined;

        await guestCart.save();

        return res.status(201).json(guestCart);
      }
    } else {
      if (userCart) {
        return res.status(200).json(userCart);
      }

      return res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

export default router;
