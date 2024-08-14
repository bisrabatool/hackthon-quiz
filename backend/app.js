require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const User = require("./userDetails");
const Enrollment = require("./enrollmentDetails");
const Quiz = require('./Quiz')
const nodemailer = require("nodemailer");
const app = express();

app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const JWT_SECRET = process.env.JWT_SECRET || "fallback_jwt_secret";
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017";

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error connecting to database:", error));

// Registration validation schema
const registerSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  userType: Joi.string().valid("User", "Admin").required(),
});

// Registration
app.post("/register", async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ status: "error", message: error.details[0].message });
  }

  const { name, email, password, userType } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ status: "error", message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username: name,
      email,
      password: hashedPassword,
      userType,
    });

    await user.save();
    return res.json({ status: "ok", message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal server error" });
  }
});

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ status: "error", message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ status: "error", message: "User not found" });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { userId: user._id, userType: user.userType },
        JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      return res
        .status(200)
        .json({ status: "ok", data: { token, userType: user.userType } });
    } else {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal server error" });
  }
});
// Forgot Password
app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: "User NOT Exist!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });

    const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: oldUser.email,
      subject: "Password Reset",
      text: `Click this link to reset your password: ${link}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    console.log(link);

    return res.json({
      status: "Check your email for a link to reset your password",
      message: "Password reset link sent",
    });
  } catch (error) {
    console.error("Error in forgot password:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal server error" });
  }
});

// Reset Password (GET)
app.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("index", { email: verify.email, status: "not verified" });
  } catch (error) {
    return res.send("not verified");
  }
});

// Reset Password (POST)
app.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  if (!password) {
    return res
      .status(400)
      .json({ status: "error", message: "Password is required" });
  }

  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);

    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );
    res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    console.log(error);
    return res.json({ status: "error", message: "Something went wrong" });
  }
});

// Enrollment
app.post("/enroll", async (req, res) => {
  try {
    const { course, batch, teacher, gender, rollNumber } = req.body;
    const newEnrollment = new Enrollment({
      course,
      batch,
      teacher,
      gender,
      rollNumber,
    });

    await newEnrollment.save();
    res.status(200).json({ status: "ok", message: "Enrollment successful!" });
  } catch (error) {
    console.error("Error during enrollment:", error);
    res
      .status(500)
      .json({
        status: "error",
        message: "An error occurred during enrollment.",
      });
  }
});
//  create a new quiz
app.post('/create-quiz', async (req, res) => {
  try {
      const quizData = req.body;
      if (!quizData.course || !quizData.batch || !quizData.teacher || !quizData.courseModule || typeof quizData.timeLimit !== 'number') {
          return res.status(400).json({ error: "Invalid input data" });
      }
      const quiz = new Quiz({
          course: quizData.course,
          batch: quizData.batch,
          teacher: quizData.teacher,
          courseModule: quizData.courseModule,
          timeLimit: quizData.timeLimit,
          questions: quizData.questions, 
      });

      await quiz.save();
      res.status(201).json({ message: "Quiz created successfully", quiz });
  } catch (error) {
      console.error("Error creating quiz:", error);
      res.status(500).json({ error: "Server error" });
  }
});


// Start server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
