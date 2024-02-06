import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = ({ title, author }) => {
  return (
    <div className="w-[400px]  ">
      <img
        className="rounded-xl "
        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="py-4 px-2">
        <h1 className="font-inter font-bold text-xl mb-2 ">{title}</h1>
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-inter text-gray-500 ">{author}</h2>
          <div className="bg-green-200 px-4 py-2 text-sm font-inter text-green-800 rounded-full font-semibold">
            Technology
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
