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
function App() {
  return (
    <div className="w-full  min-h-screen overflow-y-auto bg-gradient-to-tr from-gray-700 via-gray-400 to-gray-200">
      <div className="w-[50%] mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogItem" element={<BlogItem />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/account" element={<Account />}>
            <Route path="/account/blogs" element={<BlogsList />}></Route>
            <Route path="/account/write-blog" element={<PostBlog />}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
