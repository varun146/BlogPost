import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoTrash } from "react-icons/go";
import { data } from "autoprefixer";

const Profile = () => {
  const [blogs, setBlogs] = useState([]);
  const userId = JSON.parse(window.localStorage.getItem("user")).userId;

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:5000/deleteBlog/${id}`, {
      params: { blogId: id },
    });
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/account/blogs/${userId}`,
          {
            params: { userId: userId },
          },
        );
        const data = res.data;
        console.log(data);
        setBlogs(data);
      } catch (error) {
        console.log("i am in the catch block ", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="w-full flex flex-col gap-4 py-8 px-4  mb-6 mx-auto h-screen">
      {blogs.map((blog, idx) => {
        return (
          <div
            key={idx}
            className="w-full shadow-md shadow-gray-300 px-4 py-6 bg-white rounded-md"
          >
            <h1 className="font-inter text-2xl">{blog.title}</h1>
            <h2 className="font-inter text-md text-gray-600 mb-4">
              {blog.author}
            </h2>
            <div className="flex justify-between">
              <h2
                className="font-inter text-sm text-gray-700
              text-gray"
              >
                {blog.date}
              </h2>
              <GoTrash
                onClick={handleDelete(blog._id)}
                className="cursor-pointer"
                size={20}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
