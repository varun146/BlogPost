const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  imageUrl: {
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
  },
  content: {
    type: String,
  },
});

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
