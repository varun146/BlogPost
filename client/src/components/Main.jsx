import Blog from "./Blog";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

const Main = ({ setState }) => {
  const [data, setData] = useState([]);
  const [randomBlogs, setRandomBlogs] = useState([]);
  const [remainingBlogs, setRemainingBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:5000/blogs");
      const data = await res.json();
      console.log(data);

      // Shuffle the array
      const shuffledData = shuffleArray(data);
      console.log("I am shuffled array", shuffledData);

      // Set the first three elements in randomBlogs and the rest in remainingBlogs
      setRandomBlogs(shuffledData.slice(0, 3));
      setRemainingBlogs(shuffledData.slice(3));

      setData(remainingBlogs);
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log("I am randomBlogs array", randomBlogs);
  }, [randomBlogs]);

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  return (
    <div className="w-full h-[60%] ">
      <Navbar />
      <section
        className="h-[85%] w-full mx-auto"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514454529242-9e4677563e7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="flex flex-col gap-4 w-[65%] mx-auto py-12">
          <div className="flex bg-white gap-4 p-4 rounded-md shadow-md shadow-gray-400">
            {randomBlogs.length > 0 && (
              <img
                className="h-80 w-1/2 rounded-md object-cover"
                src={randomBlogs[0].imageUrl}
                alt="Random blog"
              />
            )}
            <div className="w-1/2 px-6 py-8  flex flex-col gap-6">
              <div>
                <span className="bg-purple-200 text-purple-700 font-inter font-semibold px-4 py-2 rounded-full">
                  {randomBlogs[0].tag}
                </span>
              </div>
              <h1 className="text-3xl font-inter font-bold">
                {randomBlogs[0].title}
              </h1>
              <p className="font-inter text-sm text-gray-600 ">
                By {randomBlogs[0].author} | {randomBlogs[0].date}
              </p>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="w-1/2 flex gap-4 p-4 bg-white rounded-md shadow-md shadow-gray-400">
              <img
                className="h-60 w-1/2 rounded-md object-cover"
                src={randomBlogs[1].imageUrl}
              />
              <div className="w-1/2 px-3 py-6 flex flex-col gap-4">
                <div>
                  <span className="bg-purple-200 text-purple-700 font-inter font-semibold px-4 py-2 rounded-full">
                    {randomBlogs[1].tag}
                  </span>
                </div>
                <h1 className="text-2xl font-inter font-bold mb-6">
                  {randomBlogs[1].title}
                </h1>
                <p className="font-inter text-sm text-gray-600 ">
                  By {randomBlogs[1].author} | {randomBlogs[1].date}
                </p>
              </div>
            </div>
            <div className="w-1/2 flex gap-4 p-4 bg-white  rounded-md shadow-md shadow-gray-400">
              <img
                className="h-60 w-1/2 rounded-md object-cover"
                src={randomBlogs[2].imageUrl}
              />
              <div className="w-1/2 p-4 flex flex-col justify-between gap-4">
                <div>
                  <span className="bg-purple-200 text-purple-700 font-inter font-semibold px-4 py-2 rounded-full">
                    {randomBlogs[2].tag}
                  </span>
                </div>
                <h1 className="text-2xl font-inter font-bold">
                  {randomBlogs[2].title}
                </h1>
                <p className="font-inter text-sm text-gray-600">
                  By {randomBlogs[2].author} |{randomBlogs[2].date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-full mt-10">
        <h1 className="text-4xl font-inter font-bold text-center ">
          Browse by category
        </h1>
        <h2 className="text-xl font-inter text-gray-600 text-center mt-5">
          Select a category to see more related content
        </h2>
        <div className="w-[60%] mt-16 flex justify-evenly  mx-auto ">
          <button className="px-6 py-3 font-inter border-2 bg-white font-bold  rounded-full text-black hover:bg-black  hover:text-white ease-in-out duration-300">
            All
          </button>
          <button className="px-6 py-3 font-inter border-2 font-bold  rounded-full text-black hover:bg-black  hover:text-white ease-in-out duration-300">
            Technology
          </button>
          <button className="px-6 py-3 font-inter border-2 font-bold  rounded-full text-black hover:bg-black  hover:text-white ease-in-out duration-300">
            Lifestyle
          </button>
          <button className="px-6 py-3 font-inter font-bold border-2 rounded-full text-black hover:bg-black  hover:text-white ease-in-out duration-300">
            Health
          </button>
          <button className="px-6 py-3 font-inter font-bold border-2 rounded-full text-black hover:bg-black  hover:text-white ease-in-out duration-300">
            Travel
          </button>
          <button className="px-6 py-3 font-inter font-bold border-2 rounded-full text-black hover:bg-black  hover:text-white ease-in-out duration-300">
            Culture
          </button>
        </div>
        <div className="mt-20 grid grid-cols-3 max-w-[60%] mx-auto">
          {data.slice(0, 6).map((blog, idx) => (
            <Link to={`blogItem/${blog._id}`} key={idx}>
              <Blog
                key={idx}
                title={blog.title}
                tag={blog.tag}
                date={blog.date}
                img={blog.imageUrl}
                author={blog.author}
              />
            </Link>
          ))}
        </div>
        <div className="flex justify-center my-10">
          <button className="px-4 py-2 border border-black rounded-md text-black font-inter text-md hover:bg-black hover:text-white ease-in duration-150">
            Browse all Posts
          </button>
        </div>
        <hr className="w-[65%] mx-auto mb-4" />
      </section>
      <section
        className="w-full mx-auto "
        style={{ backgroundImage: "url('src/assets/dotted.png')" }}
      >
        <div className="w-[65%] mx-auto p-10">
          <div className="flex gap-6 bg-white shadow-md p-8">
            <div className="flex flex-col gap-4 w-1/2 mr-8 p-4 ">
              <p className="font-inter text-2xl font-bold">
                Subscribe to Newsletter
              </p>
              <p className="font-inter text-sm text-gray-600">
                Provide your email to get email notification when we launch new
                products or publish new articles{" "}
              </p>
            </div>
            <div
              className="flex gap-4 p-8 
              border-red"
            >
              <input
                className=" px-4 py-4 font-inter border rounded-md focus:outline-none"
                type="email"
                placeholder="Enter your mail"
              />
              <button className="px-4 py-2 bg-black font-bold rounded-md text-white font-inter">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Main;
