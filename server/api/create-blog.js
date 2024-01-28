const express = require("express");
const Blog = require("../Models/blogs");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title, desc, date, content, username } = req.body;
    const blogObj = {
      title,
      date,
      author: username,
      description: desc,
      content,
    };
    console.log(blogObj);
    const newBlog = new Blog(blogObj);
    await newBlog.save();
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
