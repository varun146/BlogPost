const express = require("express");
const User = require("../Models/users");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);
    const user = await User.findOne({ username });
    console.log(user);
    console.log(`this is requested password: ${password}`);
    console.log(`this is the stored password: ${user.password}`);
    const isSame = bcrypt.compareSync(password, user.password);
    if (isSame) {
      const token = jwt.sign({ name: username }, process.env.SECRET_KEY, {
        expiresIn: "2h",
      });
      return res
        .status(200)
        .json({ token: token, message: "success", username });
    } else {
      return res.status(401).json({ error: "in1alid" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "messed up" });
  }
});

module.exports = router;
