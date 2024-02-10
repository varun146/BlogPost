require("dotenv").config();
const Blog = require("./Models/blogs");
const User = require("./Models/users");
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const accessKey = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;
const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey,
  },
  region: bucketRegion,
});

const PORT = 5000;
const dbURL =
  "mongodb+srv://root:Birdys195@cluster0.fesohko.mongodb.net/?retryWrites=true&w=majority";

app.use("/register", require("./auth/register"));
app.use("/login", require("./auth/login"));
app.use("/create-blog", require("./api/create-blog"));
app.get("/account/blogs/:userId", async (req, res) => {
  const userId = req.params.userId;
  const user = await User.findById(userId).populate("blogs");
  console.log(user);
  const userBlogs = user.blogs;
  console.log("here are blogs: ", userBlogs);
  res.status(200).json(userBlogs);
});

// get route to fetch all the present blogs on the database
app.get("/blogs", async (req, res) => {
  const blogs = await Blog.find();
  const signedUrlPromises = blogs.map(async (blog) => {
    const getObjectParams = {
      Bucket: bucketName,
      Key: blog.image,
    };

    const command = new GetObjectCommand(getObjectParams);
    return getSignedUrl(s3, command, { expiresIn: 3600 });
  });

  console.log(signedUrlPromises);
  const signedUrls = await Promise.all(signedUrlPromises);
  console.log(signedUrls);
  blogs.forEach((blog, idx) => {
    blog.imageUrl = signedUrls[idx];
  });
  console.log(blogs);
  res.json(blogs);
});

app.get("/blogs/:userId", async (req, res) => {
  const id = req.params.userId;
  const blog = await Blog.findById(id);
  const getObjectParams = {
    Bucket: bucketName,
    Key: blog.image,
  };
  const command = new GetObjectCommand(getObjectParams);
  const SignedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });
  console.log(SignedUrl);
  blog.imageUrl = SignedUrl;
  console.log(blog);
  if (!blog) {
    return res.status(401).json({ message: "No such Blog" });
  }
  return res.status(200).json(blog);
});

mongoose
  .connect(dbURL)
  .then(() =>
    app.listen(PORT, () => console.log(`server is listening on port ${PORT}`)),
  )
  .catch((error) => console.log("Database connection error!!"));
