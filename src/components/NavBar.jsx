import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import img from "../static/bg_img_hero.svg";
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = (props) => {
  return (
    <header className="w-full h-16 md:h-32 relative -z-30 px-2">
      <div className="hidden sm:flex justify-end absolute z-10 w-full">
        <img src={img} className="w-[30%]" />
      </div>
      <nav className="w-full container mx-auto flex justify-between h-16 md:h-32 items-center gap-3 relative z-50">
        <div className="text-3xl">
          <img
            className="md:w-20 w-14 inline"
            src="https://static.vecteezy.com/system/resources/previews/027/927/578/original/coffee-logo-ai-generative-free-png.png"
          />
          <h1 className="inline text-lg xl:text-3xl font-Edu">{props.title}</h1>
        </div>
        <ul className="flex-1 hidden sm:flex gap-3 p-2 text-xl justify-center">
          <li className="ml-4 text-[#FF902B]">About Us</li>
          <li className="ml-4">Our Product</li>
          <li className="ml-4">Delivery</li>
        </ul>
        <div className="flex items-center text-[#FF902B]">
          <input
            type="text"
            className="hidden p-2 rounded-2xl w-72 placeholder:text-lg shadow-md shadow-slate-500 text-xl mr-2 placeholder:italic placeholder:opacity-30 sm:inline"
            placeholder="Espresso"
          />
          <GiHamburgerMenu className="text-2xl xl:hidden " />
          <AiOutlineShoppingCart className="sm:text-3xl text-2xl hidden sm:block" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
