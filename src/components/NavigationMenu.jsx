import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
const NavigationMenu = (props) => {
  return (
    <AnimatePresence mode="wait">
      {props.visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", ease: "easeInOut" }}
          className="h-screen flex w-screen fixed z-50 bg-gray-600/60"
        >
          <div
            id="overlay"
            className="flex-1"
            onClick={() => {
              props.setNavigation(!props.visible);
            }}
          ></div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="h-full flex flex-col flex-1 z-50 bg-[#F6EBDA] justify-between"
          >
            <ul className="flex flex-col gap-8 font-semibold p-2">
              <li>About</li>
              <li>Delivery</li>
              <li>Services</li>
              <li>Contact</li>
              <li>
                <AiOutlineShoppingCart className="text-3xl text-orange-400" />
              </li>
            </ul>
            <h1 className="mb-16 font-semibold text-gray-600 flex items-center gap-1 pl-2">
              &#169; <span className="text-xs">Copyright Cafe Cravings</span>
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigationMenu;
