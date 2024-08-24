import React from "react";

const Products = (props) => {
  return (
    <section className="w-[25%] flex flex-col items-center bg-white p-5 rounded-3xl gap-4 shadow-md shadow-slate-300 hover:shadow-slate-600 border-purple-400 border mb-5">
      <div className="w-[320px] relative overflow-hidden group">
        <img
          src={props.productImg}
          className="w-full rounded-lg"
          alt="Vanilla Latte"
        />

        <div className="absolute p-2 top-full transition-all ease-in-out duration-1000 group-hover:top-0 bg-white opacity-80 h-full w-full rounded-lg">
          <h1 className="font-bold text-amber-900 text-xl opacity-100 text-center">
            {props.productName}
          </h1>
          <p className="text-sm font-bold opacity-100 m-2 rounded-2xl">
            {props.productDescription}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xl font-bold">{props.productName}</h1>
        <h1 className="text-xl font-bold">21K</h1>
      </div>
      {props.hasButton && (
        <div className="flex justify-between items-center w-full">
          <h1 className="text-lg text-[#FF902B] font-medium flex gap-3">
            <button className="p-1 border border-[#FF902B] w-24 rounded-xl">
              Hot
            </button>
            <button className="p-1 border border-[#FF902B] w-24 rounded-xl">
              Cold
            </button>
          </h1>

          <div className="text-2xl text-[#FF902B]">
            <i className="ri-shopping-cart-fill" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
