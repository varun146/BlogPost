import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = ({ title, author, img, date, tag }) => {
  return (
    <div className="h-[400px] p-2">
      <div className="rounded-xl object-cover ">
        <img className="rounded-xl " src={img} />
      </div>
      <div className="py-4 px-2 h-[150px]  flex flex-col justify-between">
        <h1 className="font-inter font-bold text-xl mb-2 ">{title}</h1>
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <h2 className="text-sm font-inter text-gray-500 ">{author}</h2>
            <h2 className="text-sm font-inter text-gray-500">{date}</h2>
          </div>
          <div className="bg-green-200 px-2 py-1 text-sm font-inter text-green-800 rounded-full font-semibold">
            {tag}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
