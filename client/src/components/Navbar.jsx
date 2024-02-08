import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import React, { useEffect, useState } from "react";
import { IoLogInOutline } from "react-icons/io5";

const Navbar = () => {
  let { user, dispatch } = useAuth();
  const navigate = useNavigate();
  if (window.localStorage.getItem("user")) {
    user = window.localStorage.getItem("user");
  }

  const handleLogout = () => {
    window.localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div className="w-[full] bg-white">
      <nav className=" w-[65%] mx-auto h-[100px]  flex items-center px-2 justify-between   py-4 text-[#202733]">
        <div className="flex items-center">
          <Link to="/">
            <div className="flex gap-2 items-center">
              <img src="/favicon.ico" className="rounded-full" />
              <h1 className="font-inter text-3xl font-bold">BlogPost</h1>
            </div>
          </Link>
        </div>
        <div className="font-inter text-md ">
          <Link className="mx-2" to="/">
            Home
          </Link>
          <Link className="mx-2" to="/">
            Blogs
          </Link>
          <Link className="mx-2" to="/">
            Categories
          </Link>
          <Link className="mx-2" to="/about">
            About
          </Link>
        </div>
        {user ? (
          <ul className="flex items-center space-x-4 text-base font-medium text-[#202733]">
            <Link to="/account" className="font-inter hover:underline">
              <img width={35} height={35} src="src/assets/cat.png" />
            </Link>
            <Link to="/blogs" className="font-inter hover:underline"></Link>
            <Link to="/" onClick={handleLogout} className="font-inter">
              <IoLogInOutline size={35} />
            </Link>
          </ul>
        ) : (
          <ul className="flex  space-x-4 text-base font-medium text-[#202733]">
            <Link
              to="/signup"
              className="font-inter bg-black rounded-md px-4 py-2 text-white"
            >
              Signup
            </Link>
            <Link
              to="/login"
              className="font-inter bg-black rounded-md px-4 py-2 text-white"
            >
              Login
            </Link>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
