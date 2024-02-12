import { useState, useEffect } from "react";

const Main = ({ setState }) => {
  const [data, setData] = useState([]);
  const [randomBlogs, setRandomBlogs] = useState([]);
  const [remainingBlogs, setRemainingBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All"); // Initial state

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:5000/blogs");
      const data = await res.json();
      console.log(data);

      // Shuffle the array
      const shuffledData = shuffleArray(data);

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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-full h-[60%] ">
      {/* ... (other code) */}
      <div className="w-[60%] mt-16 flex justify-evenly mx-auto">
        <button
          className={`px-6 py-3 font-inter border-2 font-bold rounded-full ${
            selectedCategory === "All"
              ? "bg-black text-white"
              : "bg-white text-black"
          } hover:bg-black hover:text-white ease-in-out duration-300`}
          onClick={() => handleCategoryClick("All")}
        >
          All
        </button>
        {/* Repeat similar structure for other categories */}
      </div>
      <div className="mt-20 grid grid-cols-3 max-w-[60%] mx-auto">
        {data
          .filter(
            (blog) =>
              selectedCategory === "All" || blog.tag === selectedCategory,
          )
          .slice(0, 6)
          .map((blog, idx) => (
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
      {/* ... (other code) */}
    </div>
  );
};

export default Main;
