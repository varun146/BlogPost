import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BlogItem = () => {
  const { id } = useParams();
  console.log("i am blog id", id);
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await axios.get(`http://localhost:5000/blogs/${id}`, {
        params: { userId: id },
      });
      console.log(res);
      const blog = res.data;
      console.log("I am BlogItem", blog);
      setBlog(blog);
    };
    fetchBlog();
  }, [id]);
  return (
    <div className="w-full ">
      <Navbar />
      <div className=" my-16 w-[60%] mx-auto ">
        <div className="w-full ">
          <div className="flex justify-center mb-4 ">
            <div className="bg-green-200 text-green-700 font-inter text-sm px-4 py-2 rounded-full">
              {blog.tag}
            </div>
          </div>
          <h1 className="text-center font-inter text-3xl text-bold">
            {blog.title}
          </h1>
          <h2 className="font-inter text-center text-gray-800 mt-2 font-semibold text-md font-">
            {blog.author}
          </h2>
          <h2
            className="my-4 text-center font-inter text-sm text-gray-500
            text-gray"
          >
            {blog.date}
          </h2>
          <img
            className="mx-auto shadow-md my-4"
            width={750}
            height={500}
            src={blog.imageUrl}
          />
          <br />
          <br />
          <p
            className="text-justify font-inter w-[70%] mx-auto h-screen"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogItem;
