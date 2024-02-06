import React from "react";

const Footer = () => {
  return (
    <footer className="w-full ">
      <div className="w-[65%] mx-auto px-8 flex justify-between py-8 ">
        <div className="text-sm text-gray-500 font-inter">
          <p>&#169; 2024 BlogPost. All rights reserved</p>
        </div>
        <div className="flex gap-2">
          <h2 className="text-gray-500 font-inter text-sm">Home</h2>
          <h2 className="text-gray-500 font-inter text-sm">Blogs</h2>
          <h2 className="text-gray-500 font-inter text-sm">Categories</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
