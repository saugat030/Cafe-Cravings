import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import img from "../static/bg_img_hero.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Search from "./Search";
const NavBar = (props) => {
  //mimic the calling of the data as if it were an api call.

  return (
    <header className="w-full h-16 md:h-32 relative px-2">
      <div className="hidden sm:flex justify-end absolute -z-10 w-full">
        <img src={img} className="w-[30%]" />
      </div>
      <nav className="w-full container mx-auto flex justify-between h-16 md:h-32 items-center gap-3 relative z-50">
        <div className="text-3xl">
          <img
            className="md:w-20 w-14 inline"
            src="https://static.vecteezy.com/system/resources/previews/027/927/578/original/coffee-logo-ai-generative-free-png.png"
          />
          <h1 className="inline text-lg xl:text-3xl font-Edu">
            <Link to="/">{props.title}</Link>
          </h1>
        </div>
        <ul className="flex-1 hidden sm:flex gap-3 p-2 text-xl justify-center">
          <li className="ml-4 hover:text-[#FF902B]">
            <a href="/#About">About Us</a>
          </li>
          <li className="ml-4 hover:text-[#FF902B]">
            <Link to="/products">Our Products</Link>
          </li>
          <li className="ml-4 hover:text-[#FF902B]">
            <a href="/#Delivery">Delivery</a>
          </li>
        </ul>
        <div className="flex items-center text-[#FF902B]">
          <Search />
          <button
            className="text-2xl xl:hidden p-2"
            onClick={() => {
              props.setNavigation(!props.navigationM);
            }}
          >
            <GiHamburgerMenu />
          </button>

          <AiOutlineShoppingCart className="sm:text-3xl text-2xl hidden sm:block" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
