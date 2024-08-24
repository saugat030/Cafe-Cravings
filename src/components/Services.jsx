import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col justify-between gap-14 bg-white p-14 mb-16">
      <div className="container mx-auto h-full">
        <h1 className="text-4xl font-bold mb-5">How our services work</h1>
      </div>
      <div className="container mx-auto flex justify-around items-center mt-5">
        {/*Diffferent Service seperator*/}
        <div className="flex flex-col items-center gap-5">
          <img src="/static/20+ coffee.png" alt="ICON" />
          <h1 className="text-xl font-medium">Choose your coffee</h1>
          <h2 className="text-sm text-slate-700">
            There are 20+ coffee for you
          </h2>
        </div>
        {/*Diffferent Service seperator*/}
        <div className="flex flex-col items-center gap-5">
          <img src="/static/food-truck.png" alt="ICON" />
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
      </div>
    </div>
  );
};

export default Services;
