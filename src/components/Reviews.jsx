import React from "react";

export default function Reviews(props) {
  return (
    <section className="container mx-auto p-8 bg-[#F6EBDA] flex justify-between items-center space-x-8">
      <div className="w-1/3 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-black mb-4">{props.heading}</h1>
        <p className="text-lg text-black">{props.para}</p>
      </div>

      <ul className="flex space-x-4 w-2/3">
        <li className="bg-[#FFCB7C] rounded-lg shadow-md overflow-hidden flex flex-col items-center">
          <img
            src={props.lifirstimg}
            alt="image"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 bg-[#FFD390] w-full text-center">
            <h2 className="text-lg font-semibold text-black">
              {props.lifirstheading}
            </h2>
            <p className="text-black">{props.lifirstpara}</p>
          </div>
        </li>
        <li className="bg-[#FFCB7C] rounded-lg shadow-md overflow-hidden flex flex-col items-center">
          <img
            src={props.lisecondimg}
            alt="image"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 bg-[#FFD390] w-full text-center">
            <h2 className="text-lg font-semibold text-black">
              {props.lisecondheading}
            </h2>
            <p className="text-black">{props.lisecondpara}</p>
          </div>
        </li>
        <li className="bg-[#FFCB7C] rounded-lg shadow-md overflow-hidden flex flex-col items-center">
          <img
            src={props.lithridimg}
            alt="Azura"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 bg-[#FFD390] w-full text-center">
            <h2 className="text-lg font-semibold text-black">
              {props.thirdheading}
            </h2>
            <p className="text-black">{props.thirdpara}</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
