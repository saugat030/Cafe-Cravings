import React from "react";
import { useNavigate } from "react-router-dom";
const Thumbnail = (props) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/products/${props.id}`);
  }
  return (
    <div
      onClick={handleClick}
      className="2xl:h-52 2xl:w-40 xl:w-28 xl:h-36 p-1 rounded-xl bg-primary hover:bg-secondary flex items-center justify-center cursor-pointer"
    >
      <img
        src={props.img_src}
        alt="thumbnail_pic"
        className="rounded-xl h-full w-full"
      />
    </div>
  );
};

export default Thumbnail;
