import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
const PopularNow = () => {
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
      <div className="bg-[#F6EBDA] sm:p-12 pt-10">
        <motion.section
          className="flex flex-col gap-6 container justify-between items-center xl:items-start mx-auto p-4 mb-12"
          initial={{ x: -300 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2, type: "spring" }}
          viewport={{ once: true }}
        >
          <h1 className="sm:text-4xl text-2xl font-bold mb-4 xl:ml-16 pl-2">
            Popular{" "}
            <u className="underline sm:decoration-4 decoration-2 decoration-amber-700">
              Now
            </u>
          </h1>
          <div className="flex flex-col xl:flex-row justify-around w-full  items-center">
            {data.slice(0, 3).map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                hot={item.hot}
                cold={item.cold}
                description={item.description}
                long_description={item.long_description}
                thumbnail_url={item.thumbnail_url}
                hasButton={true}
                aboutProduct=""
              />
            ))}
          </div>
        </motion.section>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default PopularNow;
