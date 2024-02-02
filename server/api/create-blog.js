const Blog = require("../Models/blogs");
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
  const s3 = new S3Client({
    credentials: {
      accessKeyId: accessKey,
      secretAccessKey: secretAccessKey,
    },
    region: bucketRegion,
  });

  const imageName = randomName();
  const params = {
    Bucker: bucketName,
    Key: imageName,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
  };

  const command = new PutObjectCommand(params);
  await s3.send(command);

  const { title, desc, tag, date, content, username } = req.body;
  const blogObj = {
    title,
    date,
    image: imageName,
    tag,
    author: username,
    description: desc,
    content,
  };
  console.log(blogObj);
  const newBlog = new Blog(blogObj);
  await newBlog.save();
  res.status(201).json({ message: "blog is created" });
});

module.exports = router;
