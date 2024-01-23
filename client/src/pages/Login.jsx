import { Toaster, toast } from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useLogin from "../hooks/useLogin.js";

const Login = () => {
  const [username, setName] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
    toast.success("Logged in successfully");
    navigate("/account");
  };

  return (
    <div className="min-h-screen border-2 border-red-900  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-100 p-8 shadow-md border-2 border-red-900 rounded-md">
        <div>
          <h2 className="mt-6 font-noto text-center text-3xl font-extrabold text-gray-900">
            Sign In{" "}
          </h2>
        </div>
        <Toaster position="bottom-center" />
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="text"
                required
                className="appearance-none rounded-md relative block w-full font-noto  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                required
                className="appearance-none rounded-md relative font-noto  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
                placeholder="Password"
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              disabled={isLoading}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 font-noto border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6"
            >
              Sign In
            </button>
            <p className="mt-5 text-gray-700 text-sm font-noto font-bold">
              Don't have an account, <Link to="/signup">Create One</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
