import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();

  const url = "http://localhost:5000/register";
  console.log(user);
  const payload = {
    name,
    email,
    password,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const response = await res.json();
      if (response.message.includes("successfully")) {
        setTimeout(() => {
          navigate("/login");
        }, 1500);
        toast.success("Registeration Successful");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-cover bg-no-repeat min-h-screen  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-100 p-8 shadow-md rounded-md">
        <div>
          <h2 className="mt-6 font-noto text-center text-3xl font-extrabold text-gray-900">
            Sign up for an account
          </h2>
        </div>
        <Toaster position="bottom-center" />
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="font-noto sr-only">
                Name
              </label>
              <input
                type="text"
                required
                className="appearance-none rounded-md relative block w-full font-noto  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                g
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="font-noto sr-only">
                Email address
              </label>
              <input
                type="email"
                required
                value={email}
                className="appearance-none rounded-md relative font-noto block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="font-noto sr-only">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                className="appearance-none rounded-md relative font-noto  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
                placeholder="Password"
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 font-noto border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
