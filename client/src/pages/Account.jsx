import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { FaPencilAlt } from "react-icons/fa";
import Editor from "../components/Editor";
import Profile from "../components/Profile";

const Account = () => {
  const [content, setContent] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const [editor, setEditor] = useState(false);
  const [profile, setProfile] = useState(true);
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
  const handleClick = (e) => {
    e.preventDefault();
    console.log("editor");
    setEditor(!editor);
    setProfile(!profile);
  };
  const handleProfile = (e) => {
    e.preventDefault();
    console.log("Account Info");
    setEditor(!editor);
    setProfile(!profile);
  };
  return (
    <div
      className=" w-full h-screen overflow-y-auto bg-no-repeat  bg-cover"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/white-background-gradient-modern-abstract-design-wave_343694-2337.jpg?w=1380&t=st=1707156465~exp=1707157065~hmac=e5e53aadbe348fd96425a2280b9b6b848c9ddaf2e005d63caf91b0ed65262010')",
      }}
    >
      <Navbar />
      <div className="flex gap-2  w-[65%] mx-auto">
        <div className="relative flex flex-col w-[20%]  h-screen  pl-24 gap-8">
          <div className="absolute top-10 left-2">
            <div className="flex items-center mb-6 cursor-pointer hover:scale-110 ease-in-out duration-300 gap-2 px-6 bg-blue-600 text-white py-3 rounded-full shadow-md shadow-blue-500 ">
              <h1 className="font-inter text-xl ">My Blogs</h1>
            </div>
            <p
              className="rounded-full shadow-md shadow-gray-600 cursor-pointer hover:scale-110 ease-in-out duration-300 px-6 py-3 font-inter text-xl bg-neutral-600 text-white "
              onClick={handleClick}
              style={{ whiteSpace: "nowrap" }}
            >
              Write a blog
            </p>
          </div>
        </div>
        <div className="flex items-center relative gap-8 w-full   mx-auto">
          <div className="flex absolute top-0  w-full">
            {editor ? <Editor /> : null}
            {profile ? <Profile /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
