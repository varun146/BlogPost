const express = require("express");
const User = require("../Models/users");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    console.log(process.env.SECRET_KEY);
    const { username, password } = req.body;
    const saltRounds = 10;
    const hashedPass = await bcrypt.hash(password, saltRounds);
    const existingUser = await User.findOne({ username });
    console.log(existingUser);
    if (existingUser) {
      return res.status(401).json({ message: "User already exits!" });
    }
    const newUser = new User({ username, password: hashedPass });
    await newUser.save();
    const userId = newUser._id;
    const token = jwt.sign({ name: username }, process.env.SECRET_KEY, {
      expiresIn: "2h",
    });

    res.status(201).json({
      message: "User registered successfully",
      token,
      username,
      userId,
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

module.exports = router;
