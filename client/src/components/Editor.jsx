import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { VscSend } from "react-icons/vsc";
import { useState } from "react";

const Editor = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const StringUser = window.localStorage.getItem("user");
  const user = JSON.parse(StringUser);
  const userId = user.userId;
  const author = user.username;
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form is submitting");
    const formData = new FormData();
    formData.append("blogImage", file);
    formData.append("title", title);
    formData.append("author", author);
    formData.append("category", category);
    formData.append("content", content);
    formData.append("userId", userId);
    console.log(formData);

    const res = await axios.post(
      "http://localhost:5000/create-blog",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );
    console.log(res);

    navigate("/");
  };
  return (
    <div className="w-full  mx-auto mt-12 bg-transparent p-4">
      <div className="flex gap-8">
        <div className="w-[90%]">
          <input
            type="text"
            className="border-b-2 bg-transparent font-inter text-md mb-5 font-bold border-black py-2 px-2  focus:outline-none mb-18 w-full "
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="border-b-2 bg-transparent font-inter text-md mb-2 font-bold border-black py-2 px-2  focus:outline-none mb-18 w-full "
            placeholder="Category  (Culture, Technology, Lifestyle ....)"
            onChange={(e) => setCategory(e.target.value)}
          />
          <div>
            <input
              type="file"
              className="mt-4 font-inter"
              placeholder="Choose a picture for your blog"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <p className="mt-4 font-inter text-sm text-gray-600">
              (Picture for the blog)
            </p>
          </div>
          <ReactQuill
            className="bg-white mt-12 w-full"
            theme="snow"
            value={content}
            onChange={setContent}
          />
        </div>
        <div>
          <button
            onClick={handleSubmit}
            className="flex justify-center items-center gap-2 px-4 py-2 bg-orange-600 text-white font-inter text-md font-bold rounded-full"
          >
            <VscSend size={20} />
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
