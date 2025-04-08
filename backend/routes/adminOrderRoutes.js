import express from "express";
import Order from "../models/Order.js";
import { authMiddleware, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

//@route GET /api/admin/orders
// @desc get all order (admin only)
// @ access Private/admin

router.get("/", authMiddleware, admin, async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user", "name email");
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//@route PUT /api/admin/orders/:id
// @desc update order status
// @ access Private/admin
router.put("/:id", authMiddleware, admin, async (req, res) => {
  try {
    const order = await Order.findOne(req.params._id);
    if (order) {
      order.status = req.body.status || order.status;
      order.isDelivered =
        req.body.status === "Delivered" ? true : order.isDelivered;
      order.deliveredAt =
        req.body.status === "Delivered" ? Date.now() : order.deliveredAt;

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//@route DELETE /api/admin/orders/:id
// @desc delete an order
// @ access Private/admin

router.delete("/:id", authMiddleware, admin, async (req, res) => {
  try {
    const order = await Order.findById(req.params._id);
    if (order) {
      order.deleteOne();
      res.json({ message: "Order deleted" });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
