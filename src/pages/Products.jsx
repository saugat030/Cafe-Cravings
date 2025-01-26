import React from "react";
import NavBar from "../components/NavBar";
import NavigationMenu from "../components/NavigationMenu";
import Thumbnail from "../components/Thumbnail";
import FadeImage from "../components/FadeImage";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";
const Products = () => {
  const [data, setData] = useState(null);
  const [navigationM, setNavigationM] = useState(false);
  const [firstIndex, setFirstIndex] = useState(0);
  const itemsPerPage = 4;
  const { navId = 1 } = useParams();
  console.log("Logging Id after navigation " + navId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/products.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (data) {
    const item = data.find((item) => item.id == navId);
    const handleNext = () => {
      setFirstIndex((prevIndex) => (prevIndex + itemsPerPage) % data.length);
    };

    const handlePrevious = () => {
      setFirstIndex(
        (prevIndex) => (prevIndex - itemsPerPage + data.length) % data.length
      );
    };
    const displayedElements = [
      ...data.slice(firstIndex, firstIndex + itemsPerPage),
      ...data.slice(0, Math.max(0, firstIndex + itemsPerPage - data.length)),
    ];
    return (
      <section>
        <div className="relative z-10 font-Poppins max-h-screen overflow-x-hidden">
          <NavBar
            title="Cafe Cravings"
            setNavigation={setNavigationM}
            navigationM={navigationM}
          />
          <NavigationMenu
            visible={navigationM}
            setNavigation={setNavigationM}
          />

          <div className="h-full flex items-center justify-between p-2 px-24">
            <div className="flex flex-col gap-8 flex-1 p-2">
              <h1 className="text-black xl:text-4xl 2xl:text-5xl font-bold">
                {item.name}
              </h1>
              <p className="2xl:text-2xl xl:text-xl text-slate-600 pe-32">
                {item.description}
              </p>
              <div className="flex gap-1">
                <button className="mr-2 text-sm sm:text-base sm:w-32 bg-[#2f2105] text-white px-2 py-1 xl:px-4 sm:py-2  border-2 border-[#2f2105] rounded-3xl hover:bg-transparent hover:text-[#2f2105]  hover:scale-105 transition ease-in-out duration-300">
                  Order Now
                </button>
                <button className="w-32 text-[#FF902B] p-2 rounded-3xl hover:bg-[#2f2105] hover:text-white transform hover:border-white ease-in-out duration-500">
                  More
                </button>
              </div>
              <div
                id="best_selling"
                className="flex flex-col items-start gap-2"
              >
                <h1 className="text-2xl font-semibold">Best Selling</h1>
                <div className="relative flex flex-wrap gap-4 w-auto">
                  {displayedElements.map((items) => (
                    <Thumbnail
                      key={items.id}
                      id={items.id}
                      img_src={items.thumbnail_url}
                      name={items.name}
                    />
                  ))}
                  <button
                    onClick={handlePrevious}
                    className="absolute top-0 bottom-0 -left-10 z-10 hover:bg-secondary/30 p-2 rounded-xl transition-colors duration-300 transform ease-linear"
                  >
                    <GrCaretPrevious className="text-2xl text-black" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute z-10 top-0 -right-10 bottom-0 hover:bg-secondary/30 p-2 rounded-xl transition-colors duration-300 transform ease-linear"
                  >
                    <GrCaretNext className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
            <FadeImage src={item.poster_url} />
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <div className="text-8xl h-screen flex  items-center justify-center">
        Loading..............
      </div>
    );
  }
};

export default Products;
