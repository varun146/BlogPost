import React from "react";

const BlogItem = ({ state }) => {
  const { title, author, content } = state;
  console.log(content);
  return (
    <div className=" mt-28 w-full h-screen">
      <div className="w-full">
        <h1 className="font-noto text-3xl text-bold">{title}</h1>
        <h2 className="font-bold text-gray-800 mt-2 text-sm font-noto">
          {author}
        </h2>
        <br />
        <br />
        <p className="text-justify font-noto">{content}</p>
      </div>
    </div>
  );
};

export default BlogItem;
