import React from "react";
import NavBar from "../components/NavBar";
import NavigationMenu from "../components/NavigationMenu";
import Thumbnail from "../components/Thumbnail";
import { useState } from "react";
const Products = () => {
  const [navigationM, setNavigationM] = useState(false);
  console.log(navigationM);
  return (
    <section>
      <div className="relative z-10 font-Poppins overflow-hidden h-screen">
        <NavBar
          title="Cafe Cravings"
          setNavigation={setNavigationM}
          navigationM={navigationM}
        />
        <NavigationMenu visible={navigationM} setNavigation={setNavigationM} />

        <div className="h-full flex items-center justify-between bg-slate-500 p-2 px-24">
          <div className="bg-rose-300 flex flex-col gap-8 flex-1">
            <h1 className="text-black text-5xl font-bold">Espresso</h1>
            <p className="text-2xl text-slate-600">description</p>
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
              <div className="flex gap-4">
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
              </div>
            </div>
          </div>
          <figure className="bg-purple-400 flex-1 flex items-center justify-center p-2 h-full">
            <img src="" alt="Photo" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Products;
