import React from "react";
const NavBar = (props) => {
  const navBg = classNames("w-full h-32 relative -z-30");
  return (
    <header className={navBg}>
      <div className="flex justify-end absolute z-10 w-full">
        <img src="/static/bg_img_hero.svg" className="w-[30%]" />
      </div>
      <nav className="w-full container mx-auto flex justify-between h-32 items-center gap-3 relative z-50">
        <div className="text-3xl">
          <img
            className="w-20 inline"
            src="https://static.vecteezy.com/system/resources/previews/027/927/578/original/coffee-logo-ai-generative-free-png.png"
          />
          <h1 className="inline font-Edu">{props.title}</h1>
        </div>
        <ul className="flex-1 flex gap-3 p-2 text-xl justify-center">
          <li className="ml-4 text-[#FF902B]">About Us</li>
          <li className="ml-4">Our Product</li>
          <li className="ml-4">Delivery</li>
        </ul>
        <div id="search_cart">
          <input
            type="text"
            className="p-2 rounded-2xl w-72 placeholder:text-lg shadow-2xl shadow-slate-800 text-xl mr-2"
            placeholder="Espresso"
          />
          <i className="ri-shopping-cart-line text-4xl ml-2" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
