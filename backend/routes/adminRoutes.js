import express from "express";
import User from "../models/User.js";
import { authMiddleware, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// @route GET /api/admin/users
// @desc Get all users (admin only)
// @ access private/admin

router.get("/", authMiddleware, admin, async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route POST /api/admin/users
// @desc Add a new user (admin only)
// @access private/admin

router.post("/", authMiddleware, admin, async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }

    user = new User({
      name,
      email,
      password,
      role: role || "customer",
    });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route PUT /api/admin/users/:id
// @desc update user infomation - name, email and role (admin only)
// @access private/admin

router.put("/:id", authMiddleware, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.role = req.body.role || user.role;
    }
    const updatedUser = await user.save();
    res.json({ message: "user updated successfully", user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route DELETE /api/admin/users/:id
// @desc delete a user (admin only)
// @access private/admin
router.delete("/:id", authMiddleware, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params._id);
    if (user) {
      await user.deleteOne();
      res.json({ message: "User delete successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
