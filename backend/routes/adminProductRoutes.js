import express from "express";
import Product from "../models/Product.js";
import { authMiddleware, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// @route GET /api/admin/products
// @desc Get all products (admin only)
// access Private/admin

router.get("/", authMiddleware, admin, async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route GET /api/admin/products
// @desc Get all products (admin only)
// access Private/admin

export default router;
