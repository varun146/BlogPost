import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = ({ title, desc, tag, img, author, date }) => {
  return (
    <div className="flex flex-col gap-4 h-[500px] w-[400px]">
      <img className="rounded-md" src={img} />
      <div>
        <h1 className="font-inter text-2xl font-bold">{title}</h1>
        <h2 className="font-inter text-md text-gray-500 mt-2">{desc}</h2>
        <div className="flex justify-between mt-2">
          <div className="flex items-center gap-4">
            <p className="font-inter">{author}</p>
            <p className="font-inter">{date}</p>
          </div>
          <span className="px-4 py-2 bg-green-100 text-green-500 font-bold rounded-full">
            {tag}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
