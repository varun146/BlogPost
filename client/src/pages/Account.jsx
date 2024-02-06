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
  const [profile, setProfile] = useState(false);
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
    setEditor(!editor);
  };
  const handleProfile = (e) => {
    e.preventDefault();
    setProfile(!profile);
  };
  return (
    <div
      className="w-full h-screen overflow-y-auto bg-no-repeat  bg-cover"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/white-background-gradient-modern-abstract-design-wave_343694-2337.jpg?w=1380&t=st=1707156465~exp=1707157065~hmac=e5e53aadbe348fd96425a2280b9b6b848c9ddaf2e005d63caf91b0ed65262010')",
      }}
    >
      <Navbar />
      <div className="flex flex-col w-[300px] ml-10 h-screen justify-center pl-24 gap-8 border-2 border-blue-700">
        <div className="flex items-center gap-2">
          <img
            onClick={handleProfile}
            width={50}
            height={50}
            className="rounded-full"
            src="src/assets/cat.png"
          />
          <h1 className="font-inter text-xl ">Account</h1>
        </div>
        <div className="flex gap-2 items-center cursor-pointer  ">
          <FaPencilAlt onClick={handleClick} size={50} />
          <h1 className="font-inter text-xl">Write a blog</h1>
        </div>
      </div>
      <div className="flex items-center fixed justify-evenly gap-8 w-[90%] border-2 border-red-700 mt-24 mx-auto">
        <div className="flex border-2 border-green-700 w-[70%]">
          {editor ? <Editor /> : null}
          {profile ? <Profile /> : null}
        </div>
      </div>
    </div>
  );
};

export default Account;
