import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import BlogItem from "./components/BlogItem";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Account from "./pages/Account";
import BlogsList from "./pages/BlogsList";
import PostBlog from "./pages/PostBlog";
import { useState } from "react";
function App() {
  const [state, setState] = useState("");
  return (
    <div className="w-full ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main setState={setState} />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogItem" element={<BlogItem state={state} />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/account" element={<Account />}>
          <Route path="/account/blogs" element={<BlogsList />}></Route>
          <Route path="/account/write-blog" element={<PostBlog />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
