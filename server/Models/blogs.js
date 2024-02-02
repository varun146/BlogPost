const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  tag: {
    type: String,
  },
  date: {
    type: String,
  },
  author: {
    type: String,
    ref: "User",
    required: true,
  },
  description: {
    type: String,
  },
  content: {
    type: String,
  },
});

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
