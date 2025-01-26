import React from "react";
import { useState, useEffect } from "react";

const FadeImage = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    setIsLoaded(false);
  }, [props.src]);

  return (
    <figure
      className={`transition-opacity duration-700 flex-1 flex items-center h-full  justify-center ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={props.src}
        alt="poster_bg"
        className="2xl:h-[800px] xl:h-[650px] rounded-xl"
        onLoad={handleImageLoad}
      />
    </figure>
  );
};

export default FadeImage;
