import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { motion } from "framer-motion";
const Products = (props) => {
  return (
    <motion.section
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, type: "spring" }}
      viewport={{ once: true }}
      className="2xl:w-[25%] xl:w-[32%] w-[75%] flex flex-col items-center bg-white sm:p-5 p-3 rounded-3xl gap-2 shadow-md shadow-slate-300 hover:shadow-slate-600 mb-5"
    >
      <div className="sm:w-[320px] w-[240px] relative overflow-hidden group">
        <img
          src={props.productImg}
          className="w-full rounded-lg"
          alt="Vanilla Latte"
        />

        <div className="absolute p-2 top-full transition-all ease-in-out duration-1000 group-hover:top-0 bg-white opacity-80 h-full w-full rounded-lg">
          <h1 className="font-bold text-amber-900 sm:text-xl opacity-100 text-center">
            {props.productName}
          </h1>
          <p className="text-sm text-balance opacity-100 m-2 rounded-2xl">
            {props.productDescription}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <h1 className="xl:text-xl text-lg xl:font-bold font-semibold">
          {props.productName}
        </h1>
        <h1 className="xl:text-xl text-lg xl:font-bold font-semibold">21K</h1>
      </div>
      <div className="flex justify-between items-center w-full">
        {props.hasButton && (
          <h1 className="sm:text-lg text-base text-[#FF902B] font-medium flex sm:gap-3 gap-2">
            <button className="sm:p-1 border border-[#FF902B] sm:w-24 w-16 rounded-xl">
              Hot
            </button>
            <button className="sm:p-1 border border-[#FF902B] sm:w-24 w-16 rounded-xl">
              Cold
            </button>
          </h1>
        )}
        {props.aboutProduct && (
          <p className="text-slate-600">{props.aboutProduct}</p>
        )}
        <div className="sm:text-2xl text-lg text-[#FF902B] p-2">
          <FaCartShopping />
        </div>
      </div>
    </motion.section>
  );
};

export default Products;
