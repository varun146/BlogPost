const express = require("express");
const User = require("../Models/users");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;
    const saltRounds = 10;
    const hashedPass = await bcrypt.hash(password, saltRounds);
    const existingUser = await User.findOne({ email });
    console.log(existingUser);
    if (existingUser) {
      return res.json({ message: "User already exits!" });
    }
    const newUser = new User({ username: name, email, password: hashedPass });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
