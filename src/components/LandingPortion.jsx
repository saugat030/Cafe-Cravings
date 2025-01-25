import React from "react";
import img from "../static/img_hero.png";
import { motion } from "framer-motion";
const LandingPortion = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row container gap-12 xl:gap-1 mx-auto justify-between items-center sm:p-7 p-3 sm:mt-4">
      <motion.div
        initial={{ x: -300 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2, type: "spring" }}
        viewport={{ once: true }}
        className="flex flex-col xl:items-start items-center"
      >
        <h1 className="sm:text-6xl text-2xl w-[70%]">
          Enjoy your
          <p className="text-[#FF902B] inline m-0 p-0"> coffee </p>
          before your activity
        </h1>
        <h2 className="text-slate-600 mt-3 text-xs md:text-base sm:mt-5 text-center">
          Boost your productivity and build your mood with a glass of coffee in
          the morning
        </h2>
        <div className="flex gap-1 mt-3">
          <button className="mr-2 text-sm sm:text-base sm:w-32 bg-[#2f2105] text-white px-2 py-1 xl:px-4 sm:py-2 border border-[#2f2105] rounded-3xl hover:bg-transparent hover:text-[#2f2105] hover:scale-105 transition ease-in-out duration-500">
            Order Now
          </button>
          <button className="w-32 text-[#FF902B] p-2 rounded-3xl hover:bg-[#2f2105] hover:text-white transform hover:border-white ease-in-out duration-500">
            More
          </button>
        </div>
      </motion.div>
      <motion.figure
        className="sm:w-[700px] w-[250px] me-8"
        initial={{ x: 300 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2, type: "spring" }}
        viewport={{ once: true }}
      >
        <img src={img} className="w-full h-full" />
      </motion.figure>
    </div>
  );
};

export default LandingPortion;
