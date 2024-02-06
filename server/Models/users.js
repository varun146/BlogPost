const mongoose = require("mongoose");
const Blog = require("./blogs");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    blogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
  },
  { strict: false },
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
