import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles
import { VscSend } from "react-icons/vsc";

const Editor = () => {
  const [value, setValue] = useState("");
  return (
    <div className="w-full  mx-auto mt-12 bg-transparent p-4">
      <div className="flex gap-8">
        <div className="w-[90%]">
          <input
            type="text"
            className="border-b-2 bg-transparent font-inter text-md font-bold border-black py-2 px-2  focus:outline-none mb-18 w-full "
            placeholder="Title"
          />
          <div>
            <input
              type="file"
              className="mt-4 font-inter"
              placeholder="Choose a picture for your blog"
            />
            <p className="mt-4 font-inter text-sm text-gray-600">
              (Picture for the blog)
            </p>
          </div>
          <ReactQuill
            className="bg-white mt-12 w-full"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
        <div>
          <button className="flex justify-center items-center gap-2 px-4 py-2 bg-orange-600 text-white font-inter text-md font-bold rounded-full">
            <VscSend size={20} />
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
