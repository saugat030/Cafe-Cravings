import React from "react";

const Thumbnail = (props) => {
  return (
    <div
      onClick={() => props.setID(props.id)}
      className="h-52 w-40 p-1 rounded-xl bg-primary hover:bg-secondary flex items-center justify-center cursor-pointer"
    >
      <img
        src={props.img_src}
        alt="Photo"
        className="rounded-xl h-full w-full"
      />
    </div>
  );
};

export default Thumbnail;
