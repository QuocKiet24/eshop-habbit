import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// @route POST api/users/register
// @desc Register a new user
// @access Public
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) return res.status(400).json({ message: "User already exists" });

    user = new User({ name, email, password });
    await user.save();

    const payload = {
      user: {
        id: user._id,
        role: user.role,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (err, token) => {
        if (err) throw err;

        res.status(201).json({
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/users/login
// @desc Login a user
// @access Public
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await user.matchPassword(password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const payload = {
      user: {
        id: user._id,
        role: user.role,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (err, token) => {
        if (err) throw err;

        res.json({
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route GET api/users/profile
// @desc Get logged-in user's profile (protected route)
// @access Private
router.get("/profile", authMiddleware, async (req, res) => {
  res.json(req.user);
});

export default router;
