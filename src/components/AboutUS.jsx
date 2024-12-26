import { motion } from "framer-motion";
import img from "../static/unsplash_3n3mPoGko8g.png";
import React from "react";

const AboutUS = () => {
  return (
    <div className="bg-[#F6EBDA] mt-32">
      <div className="p-6 flex container gap-12 mx-auto items-center justify-evenly h-[500px]">
        <motion.figure
          className="w-[360px] h-[400px] relative"
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
          viewport={{ once: true }}
        >
          <img
            src={img}
            alt="IMAGE"
            className="absolute bottom-8 border-4 border-white rounded-xl shadow-xl shadow-gray-700"
          />
        </motion.figure>
        {/* AboutUS */}
        <motion.section
          className="p-2 w-1/2 flex flex-col"
          initial={{ x: 300 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2, type: "spring" }}
          viewport={{ once: true }}
        >
          <h1 className="text-black text-3xl m-2 font-bold">About us</h1>
          <h2 className="text-black text-xl m-2 font-semibold">
            We provide quality coffee, and ready to deliver.
          </h2>
          <p className="text-[#D9D9D9] font-medium m-2">
            We are a company that makes and distributes delicious drinks. our
            main product is made with a secret recipe and available in stores
            worldwide.
          </p>
          <button className="bg-[#2F2105] w-1/4 p-2 rounded-3xl text-[#F4AE26] m-2">
            Get your Coffee
          </button>
        </motion.section>
        {/* END AboutUS */}
      </div>
    </div>
  );
};

export default AboutUS;
