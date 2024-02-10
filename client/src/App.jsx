import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import BlogItem from "./components/BlogItem";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Account from "./pages/Account";
import BlogsList from "./pages/BlogsList";
import PostBlog from "./pages/PostBlog";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
function App() {
  const [state, setState] = useState("");
  const [token, setToken] = useState(() => window.localStorage.getItem("user"));
  console.log(token);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main setState={setState} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/blogItem/:id"
          element={<BlogItem state={state} />}
        ></Route>
        <Route
          path="/signup"
          element={
            !token ? <Signup setToken={setToken} /> : <Navigate to="/account" />
          }
        ></Route>
        <Route
          path="/login"
          element={
            !token ? <Login setToken={setToken} /> : <Navigate to="/account" />
          }
        ></Route>
        <Route
          path="/account"
          element={token ? <Account /> : <Navigate to="/login" />}
        >
          <Route path="/account/blogs" element={<BlogsList />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
