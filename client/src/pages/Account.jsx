import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Account = () => {
  const [value, setValue] = useState("");
  return (
    <div className="w-full flex justify-center gap-4 items-center h-screen">
      <div className="w-full h-[80%] border-2 border-red-900">
        <div className="flex flex-col gap-4">
          <div className="w-full flex justify-between">
            <label className="px-4 font-noto font-bold flex justify-center items-center">
              Title
            </label>
            <input className="w-[80%] p-2 bg-white/60" />
          </div>
          <div className="w-full flex justify-between">
            <label className="px-4 font-noto font-bold ">Title</label>
            <input className="w-[80%]" />
          </div>
          <div className="w-full flex justify-between">
            <label className="px-4 font-noto font-bold ">Title</label>
            <input className="w-[80%]" />
          </div>
        </div>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
    </div>
  );
};

export default Account;
