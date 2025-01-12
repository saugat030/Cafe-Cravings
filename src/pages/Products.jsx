import React from "react";
import NavBar from "../components/NavBar";
import NavigationMenu from "../components/NavigationMenu";
import Thumbnail from "../components/Thumbnail";
import { useState, useEffect } from "react";
const Products = () => {
  const [data, setData] = useState(null);
  const [navigationM, setNavigationM] = useState(false);
  const [id, setID] = useState(Math.floor(Math.random() * 10));
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
    const item = data.find((item) => item.id === id);
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
              <h1 className="text-black text-5xl font-bold">{item.name}</h1>
              <p className="text-2xl text-slate-600 pe-32">
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
              <div id="best_selling" className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold">Best Selling</h1>
                <div className="flex flex-wrap gap-4">
                  {data.slice(0, 11).map((items) => (
                    <Thumbnail
                      setID={setID}
                      key={items.id}
                      id={items.id}
                      img_src={items.thumbnail_url}
                      name={items.name}
                    />
                  ))}
                </div>
              </div>
            </div>
            <figure
              className={`transition-opacity duration-700 flex-1 flex items-center h-full justify-center`}
            >
              <img
                src={item.poster_url}
                alt="poster_bg"
                className="h-[800px] rounded-xl"
              />
            </figure>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <div className="text-8xl h-screen  text-center justify-center">
        Loading..............
      </div>
    );
  }
};

export default Products;
