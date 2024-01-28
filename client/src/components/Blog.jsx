import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = ({ title, author, date, content, description, setState }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(content);
    setState({ title, author, content });
    navigate("/blogItem");
  };
  return (
    <div className="lg:w-full md:w-full sm:w-full h-80 mt-20 p-6  rounded-md shadow-md bg-[#202733] flex">
      <img
        className="lg:rounded-md md:rounded-t-md sm:rounded-t-md rounded-md p-8 lg:w-1/2 md:w-full sm:w-full h-full object-contain"
        src="https://images.unsplash.com/photo-1673255745677-e36f618550d1?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Blog Image"
      />
      <div className="relative p-5 ">
        <h1 className="lg:text-xl md:text-xl sm:text-lg font-noto font-bold mt-4 lg:mt-0 md:mt-0 sm:mt-0 text-white">
          {title}
        </h1>
        <h2 className="mt-4 lg:mt-2 md:mt-2 sm:mt-2 font-noto text-sm text-gray-300">
          {author}
        </h2>
        <h2 className="mt-4 lg:mt-2 md:mt-2 sm:mt-2 font-noto text-sm text-gray-300">
          {date}
        </h2>
        <p className="leading-relaxed mt-4 lg:mt-6 mr-6 text-justify  md:mt-2 sm:mt-2 text-sm font-noto text-white">
          {description}
        </p>

        <button
          onClick={handleClick}
          className="absolute bottom-0 right-0 font-noto px-4 py-2 bg-gray-400 hover:scale-110 ease-in-out duration-300  rounded-full text-sm"
        >
          Read
        </button>
      </div>
    </div>
  );
};

export default Blog;
