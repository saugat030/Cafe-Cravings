import { motion } from "framer-motion";
import img from "../static/unsplash_3n3mPoGko8g.png";
import React from "react";

const AboutUS = () => {
  return (
    <div className="bg-[#F6EBDA] xl:mt-32 mt-16">
      <div className="xl:p-6 flex xl:flex-row flex-col container gap-12 mx-auto items-center justify-evenly xl:h-[500px]">
        <motion.figure
          className="xl:w-[360px] w-[300px] h-[400px] static xl:relative"
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
          viewport={{ once: true }}
        >
          <img
            src={img}
            alt="IMAGE"
            className="xl:absolute h-full w-full static bottom-8 xl:border-4 border-2 border-white rounded-xl shadow-xl shadow-gray-700"
          />
        </motion.figure>
        {/* AboutUS */}
        <motion.section
          className="p-2 xl:w-1/2 flex flex-col"
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
          <button className="bg-[#2F2105] xl:w-1/4 w-36 p-2 rounded-2xl text-[#F4AE26] m-2">
            Get your Coffee
          </button>
        </motion.section>
        {/* END AboutUS */}
      </div>
    </div>
  );
};

export default AboutUS;
