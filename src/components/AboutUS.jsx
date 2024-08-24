import React from "react";

const AboutUS = () => {
  return (
    <div className="bg-[#F6EBDA] mt-32">
      <div className="p-6 flex container gap-12 mx-auto items-center justify-evenly h-[500px]">
        <figure className="w-[360px] h-[400px] relative">
          <img
            src="/static/unsplash_3n3mPoGko8g.png"
            alt="IMAGE"
            className="absolute bottom-8 border-4 border-white rounded-xl shadow-xl shadow-gray-700"
          />
        </figure>
        {/* AboutUS */}
        <section className="p-2 w-1/2 flex flex-col">
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
        </section>
        {/* END AboutUS */}
      </div>
    </div>
  );
};

export default AboutUS;
