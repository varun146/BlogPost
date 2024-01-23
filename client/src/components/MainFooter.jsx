import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const MainFooter = () => {
  const { state } = useAuth();
  console.log(state);
  return state.user ? (
    <div className="hidden"></div>
  ) : (
    <div className="flex justify-center items-center  w-full h-[500px] has-">
      <div>
        <h1 className="font-noto text-3xl font-bold ">
          Want to write your thoughts?
        </h1>
        <Link to="/signup">
          <h2 className="mt-4 font-noto text-xl text-center font-bold">
            Register here
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default MainFooter;
