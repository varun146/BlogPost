import React from "react";

const Profile = () => {
  return (
    <div className="w-full flex relative justify-center items-center border-2 border-red-900 mx-auto h-screen">
      <div className="absolute top-10 flex flex-col gap-4 ">
        <img
          src="src/assets/cat.png"
          height={200}
          width={200}
          className="shadow-xl rounded-full shadow-blue-300"
        />
        <p className="text-center font-inter text-xl">varun</p>
      </div>
    </div>
  );
};

export default Profile;
