import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const ProductCard = (props) => {
  const navigate = useNavigate();

  function handleClick(id) {
    console.log("Logging Id before navigating " + props.id);
    navigate(`/products/${id}`);
  }
  return (
    <motion.section
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, type: "spring" }}
      viewport={{ once: true }}
      onClick={() => handleClick(props.id)}
      className="2xl:w-[25%] xl:w-[32%] w-[75%] flex flex-col items-center bg-white sm:p-5 p-3 rounded-3xl gap-2 shadow-md shadow-slate-300 hover:shadow-slate-600 mb-5 cursor-pointer"
    >
      <figure className="xl:w-[320px] xl:h-[250px] w-[220px] aspect-square lg:aspect-auto relative overflow-hidden group">
        <img
          src={props.thumbnail_url}
          className="w-full h-full object-cover rounded-lg"
          alt="Vanilla Latte"
        />

        <div className="absolute p-2 top-full transition-all ease-in-out duration-1000 group-hover:top-0 bg-white opacity-80 h-full w-full rounded-lg">
          <h1 className="font-bold text-amber-900 sm:text-xl opacity-100 text-center">
            {props.name}
          </h1>
          <p className="text-sm text-balance opacity-100 m-2 rounded-2xl">
            {props.description}
          </p>
        </div>
      </figure>
      <div className="flex justify-between items-center w-full">
        <h1 className="xl:text-xl text-lg xl:font-bold font-semibold">
          {props.name}
        </h1>
        <h1 className="xl:text-xl text-lg xl:font-bold font-semibold">21K</h1>
      </div>
      <div className="flex justify-between items-center w-full">
        {props.hasButton && (
          <h1 className="sm:text-lg text-base  text-[#FF902B] font-medium flex sm:gap-3 gap-2">
            <button
              disabled={!props.hot}
              className={`sm:p-1 border ${
                !props.hot
                  ? "border-gray-400 text-gray-400"
                  : "border-[#FF902B] hover:bg-[#FF902B] hover:text-white"
              } sm:w-24 w-16 rounded-xl`}
            >
              Hot
            </button>
            <button
              disabled={!props.cold}
              className={`sm:p-1 border ${
                !props.cold
                  ? "border-gray-400 text-gray-400"
                  : "border-[#FF902B] hover:bg-[#FF902B] hover:text-white"
              } sm:w-24 w-16 rounded-xl`}
            >
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

export default ProductCard;
