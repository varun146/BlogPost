require("dotenv").config();
const Blog = require("./Models/blogs");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
const dbURL = "mongodb://localhost:27017/blogs";

app.use("/register", require("./auth/register"));
app.use("/login", require("./auth/login"));
app.use("/create-blog", require("./api/create-blog"));
app.get("/blogs", async (req, res) => {
  console.log(req);
  const data = await Blog.find();
  console.log(data);
  res.json(data);
});

mongoose
  .connect(dbURL)
  .then(() =>
    app.listen(PORT, () => console.log(`server is listening on port ${PORT}`)),
  )
  .catch((error) => console.log("Database connection error!!"));
