import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Account = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  const formData = new FormData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.append("blogImage", file);
    formData.append("title", title);
    formData.append("author", author);
    formData.append("category", category);
    formData.append("date", date);
    formData.append("description", desc);
    formData.append("content", content);

    await axios.post("http://localhost:5000/create-blog", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    navigate("/");
  };
  return (
    <div className="w-full flex justify-center gap-4 items-center h-screen rounded-md ">
      <div className="w-full h-[90%] relative shadow-xl shadow-black rounded-md bg-[#202733] ">
        <div className="flex flex-col gap-4 p-4 mt-12">
          <div className="w-full   flex justify-between">
            <input
              placeholder="Title"
              className="w-full  p-2 bg-white font-noto rounded-md"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-between">
            <input
              placeholder="Description"
              className="w-full p-2 bg-white font-noto rounded-md"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-between">
            <input
              placeholder="Author"
              className="w-full p-2 bg-white font-noto rounded-md"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="w-full flex justify-between">
            <input
              placeholder="Category"
              className="w-full p-2 bg-white font-noto rounded-md"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-between">
            <input
              placeholder="Date dd-mm-yyyy"
              className="w-full font-noto text-black p-2 bg-white  rounded-md"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-between">
            <input
              type="file"
              placeholder="Date dd-mm-yyyy"
              className="w-full font-noto text-black p-2 bg-white  rounded-md"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
        </div>
        <div className="p-4 h-[80%] w-full ">
          <textarea
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-[80%] bg-gray-700 text-white font-noto p-3 focus:outline-none"
          ></textarea>
        </div>
        <button
          onClick={(e) => handleSubmit(e)}
          className="absolute bottom-2 left-4  px-4 py-2 rounded-full bg-gray-300 text-black font-noto "
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Account;
