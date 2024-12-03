import React from "react";
const Card = ({ iname, review, name }) => {
  return (
    <div class="bg-[#FFD390] w-[300px] p-2 rounded-lg relative">
      <img src={iname} alt={iname} className="h-full w-full" />
      <div className="bg-[#FFCB7C] absolute bottom-16 left-28 w-56 rounded-lg p-2 z-20 text-pretty line-clamp-3 h-20">
        <h4 className="font-bold text-base">{name}</h4>
        <p className="text-xs">{review}</p>
      </div>
    </div>
  );
};

export default Card;
