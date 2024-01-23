import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const { state, dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <nav className=" flex  items-center justify-between py-4 text-gray-700">
      <div className="flex items-center">
        <Link to="/">
          <h1 className="font-noto text-3xl font-bold">BlogPost</h1>
        </Link>
      </div>
      {state.user ? (
        <ul className="flex space-x-4 text-base font-medium">
          <Link to="/account" className="font-noto hover:underline">
            Account
          </Link>
          <Link to="/blogs" className="font-noto hover:underline">
            My blogs
          </Link>
          <Link
            to="/"
            onClick={handleLogout}
            className="font-noto hover:underline"
          >
            Logout
          </Link>
        </ul>
      ) : (
        <ul className="flex space-x-4 text-base font-medium">
          <Link to="/" className="font-noto hover:underline">
            Home
          </Link>
          <Link to="/about" className="font-noto hover:underline">
            About
          </Link>
          <Link to="/login" className="font-noto hover:underline">
            Login
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
