const Blog = require("../Models/blogs");
const User = require("../Models/users");
const multer = require("multer");
const express = require("express");
const crypto = require("crypto");
const router = express.Router();
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const accessKey = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

// function to create a random name for the image
const randomName = (bytes = 32) => crypto.randomBytes(32).toString("hex");

// creating storage engine for multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/", upload.single("blogImage"), async (req, res) => {
  console.log("req file", req.file);
  console.log("req body", req.body);
  const currentDate = new Date();

  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth(); // Note: Months are zero-based, so add 1
  const year = currentDate.getFullYear();
  console.log(monthIndex);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[monthIndex];
  const date = `${day} ${month}, ${year}`;

  const s3 = new S3Client({
    credentials: {
      accessKeyId: accessKey,
      secretAccessKey: secretAccessKey,
    },
    region: bucketRegion,
  });

  const imageName = randomName();
  const params = {
    Bucket: bucketName,
    Key: imageName,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
  };

  const command = new PutObjectCommand(params);
  await s3.send(command);

  const { title, category, content, userId, author } = req.body;

  const blogObj = {
    title,
    image: imageName,
    tag: category,
    date,
    author,
    content,
  };

  console.log(blogObj);
  const newBlog = new Blog(blogObj);
  try {
    await newBlog.save();
    await User.findByIdAndUpdate(
      userId,
      { $push: { blogs: newBlog._id } },
      { new: true },
    );
    res.status(201).json({ message: "blog is created" });
  } catch (err) {}
});

module.exports = router;
