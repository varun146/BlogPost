import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { Link } from "react-router-dom";
import MainFooter from "./MainFooter";

const Main = ({ setState }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:5000/blogs");
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="mt-32 w-full h-screen">
      <div className="flex gap-2 w-full">
        <div className="relative hover:scale-105 cursor-pointer ease-in-out duration-300">
          <img
            className="relative object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1673255745677-e36f618550d1?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="absolute w-full h-full top-0 flex items-end bg-gradient-to-t from-black to-transparent justify-center text-white">
            <h1 className="  p-4 mb-10 font-noto text-2xl text-center font-bold">
              The Symphony of Silicon Minds: Navigating the AI Symphony
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full relative hover:scale-105 cursor-pointer ease-in-out duration-300">
            <img src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="absolute w-full h-full top-0 bg-gradient-to-t flex items-end justify-center from-black to-transparent">
              <h1 className="text-white font-noto font-bold p-4 text-2xl mb-2">
                Ear Candy: Unwrapping the Sweet Symphony of Podcast Pleasures
              </h1>
            </div>
          </div>
          <div className="w-full relative hover:scale-105 ease-in-out cursor-pointer duration-300">
            <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="absolute w-full h-full top-0 bg-gradient-to-t flex items-end justify-center from-black to-transparent">
              <h1 className="text-white font-noto font-bold p-4 text-2xl mb-2">
                Spin City Chronicles: Navigating the Beats with the Masters of
                the Decks
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-28">
        <h1 className="text-3xl font-noto font-bold">Blogs</h1>
      </div>

      {data.map((blog, idx) => (
        <Link key={idx} to="/blogItem">
          <Blog
            key={idx}
            setState={setState}
            title={blog.title}
            author={blog.author}
            date={blog.date}
            description={blog.description}
            content={blog.content}
          />
        </Link>
      ))}

      <MainFooter />
    </div>
  );
};

export default Main;
// <img
//   src="https://images.unsplash.com/photo-1673255745677-e36f618550d1?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   className="h-full w-full object-contain"
// />
//
//
//
//
// <img
//   src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   className="h-full w-full object-contain"
// />
// <img
//   src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   className="h-full w-full object-contain"
// />
