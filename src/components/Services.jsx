import React from "react";
import { motion } from "framer-motion";
import img1 from "../static/20+ coffee.png";
import img2 from "../static/food-truck.png";
const Services = () => {
  return (
    <div className="flex flex-col justify-between gap-14 bg-white p-14">
      <motion.div
        className="container mx-auto h-full"
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, type: "spring" }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold mb-5">How our services work</h1>
      </motion.div>
      <motion.div
        className="container mx-auto flex justify-around items-center mt-5"
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, type: "spring" }}
        viewport={{ once: true }}
      >
        {/*Diffferent Service seperator*/}
        <div className="flex flex-col items-center gap-5">
          <img src={img1} alt="ICON" />
          <h1 className="text-xl font-medium">Choose your coffee</h1>
          <h2 className="text-sm text-slate-700">
            There are 20+ coffee for you
          </h2>
        </div>
        {/*Diffferent Service seperator*/}
        <div className="flex flex-col items-center gap-5">
          <img src={img2} alt="ICON" />
          <h1 className="text-xl font-medium">We deliver it to you</h1>
          <h2 className="text-sm text-slate-700">
            Choose your delivery location
          </h2>
        </div>
        {/*Diffferent Service seperator*/}
        <div className="flex flex-col items-center gap-5">
          <img src="/static/20+ coffee.png" alt="ICON" />
          <h1 className="text-xl font-medium">Enjoy your coffee</h1>
          <h2 className="text-sm text-slate-700">
            Warm coffee served at your doorsteps
          </h2>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
