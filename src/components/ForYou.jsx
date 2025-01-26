import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
// import img from "../static/vanillaLatte.png";
const ForYou = () => {
  const [data, setData] = useState(null);
  //mimic the calling of the data as if it were an api call.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/products.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (data) {
    return (
      <div className="xl:p-20 p-4 pt-16" id="For_You">
        <div className="container mx-auto flex flex-col gap-3 xl:p-5">
          <h1 className="xl:text-4xl text-3xl font-bold text-black xl:mb-10 mb-5">
            Special Menu{" "}
            <u className="underline decoration-4 decoration-amber-700">
              for you
            </u>
          </h1>
          <div className="flex flex-wrap w-full gap-5 xl:justify-between justify-center items-center">
            {data.slice(0, 6).map((item) => (
              <ProductCard
                name={item.name}
                id={item.id}
                description={item.description}
                thumbnail_url={item.thumbnail_url}
                long_description={item.long_description}
                hasButton={false}
                aboutProduct="A hazelnut or vanilla latte or a caramel cappuccino."
              />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <h1 className="bg-red-400 text-8xl">Loading....</h1>;
  }
};

export default ForYou;
