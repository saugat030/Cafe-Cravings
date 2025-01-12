import React from "react";

const Thumbnail = (props) => {
  function handleClick() {
    props.setID(props.id);
  }
  return (
    <div
      onClick={handleClick}
      className="h-52 w-40 p-1 rounded-xl bg-primary hover:bg-secondary flex items-center justify-center cursor-pointer"
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
