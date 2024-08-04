require("dotenv").config(); // Import dotenv for environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const User = require("./userDetails");

const app = express();

app.use(cors());
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || "fallback_jwt_secret"; // Use environment variables for sensitive data
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017";

mongoose
  .connect(mongoUrl)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error connecting to database:", error));

// Data validation schema using Joi
const registerSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

app.post("/register", async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) return res.status(400).json({ status: "error", message: error.details[0].message });

  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ status: "error", message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username: name,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.json({ status: "ok", message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ status: "error", message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ status: "error", message: "User not found" });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
      return res.status(200).json({ status: "ok", data: token });
    } else {
      return res.status(400).json({ status: "error", message: "Invalid password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
