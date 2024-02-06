import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUser } from "react-icons/fa";
import { IoLockClosedSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();

  const url = "http://localhost:5000/register";
  console.log(user);
  const payload = {
    username,
    password,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const response = await res.json();
    if (res.ok) {
      toast.success("Registeration Successful");
      setTimeout(() => {
        navigate("/account");
      }, 1500);
      window.localStorage.setItem("user", response);
    } else {
      toast.error("Registeration Failed");
      navigate("/signup");
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?w=1380&t=st=1707112394~exp=1707112994~hmac=e38bab29127d3e49839d7c2b6b0045cd65a7fc8ab0681f7fd36463ee98568894')",
      }}
      className="bg-cover bg-no-repeat min-h-screen  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex justify-center items-center  w-full h-screen ">
        <div className="flex flex-col  gap-8 px-4  py-12 w-[500px] h-[60%] ">
          <h1 className="text-4xl font-inter mb-10 text-center font-bold">
            Sign up
          </h1>
          <div className="h-[50%]  flex flex-col gap-12 ">
            <div className="flex gap-4 items-center px-2">
              <FaUser />
              <input
                type="text "
                onChange={(e) => setUsername(e.target.value)}
                className="focus:outline-none py-4 border-b-2 border-black bg-transparent w-full font-inter px-2 "
                placeholder="Username"
              />
            </div>
            <div className="flex gap-4 items-center px-2">
              <IoLockClosedSharp size={20} />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="focus:outline-none py-4 border-b-2 bg-transparent border-black w-full font-inter px-2 "
                placeholder="Password"
              />
            </div>
            <h2 className="text-sm font-inter text-center">
              Already have an account? <Link to="/login">Log In</Link>
            </h2>
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              onClick={handleSubmit}
              className="font-inter bg-black px-6 py-3 rounded-full text-white font-bold"
            >
              Submit
            </button>
          </div>
          <Toaster position="bottom-center" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
