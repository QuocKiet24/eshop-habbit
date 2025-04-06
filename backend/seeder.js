import mongoose from "mongoose";
import dotenv from "dotenv";

import Product from "./models/Product.js";
import User from "./models/User.js";
import Cart from "./models/Cart.js";

import products from "./data/products.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const seedData = async () => {
  try {
    // delete all products
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    // create a default user
    const createdUser = await User.create({
      name: "admin",
      email: "admin@gmail.com",
      password: "12345678",
      role: "admin",
    });

    const userId = createdUser._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: userId };
    });

    await Product.insertMany(sampleProducts);
    console.log("Data imported successfully");
    process.exit();
  } catch (error) {
    console.error("Error importing data: ", error);
    process.exit(1);
  }
};

seedData();
