import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/products.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="relative">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="hidden p-2 rounded-2xl w-72 placeholder:text-lg shadow-md shadow-slate-500 text-xl mr-2 placeholder:italic placeholder:opacity-30 sm:inline"
        placeholder="Espresso"
      />
      <div className="absolute top-full bg-white z-50 w-full rounded-xl">
        {!loading &&
          search.trim() &&
          data
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <h1
                key={item.id}
                className="hover:bg-primary p-2 flex justify-around h-20 items-center my-1"
                onClick={() => navigate(`/products/${item.id}`)}
              >
                <img
                  src={item.thumbnail_url}
                  alt="ThumbnailUrl"
                  className="h-full"
                />
                <span>{item.name}</span>
              </h1>
            ))}
      </div>
    </div>
  );
};
export default Search;
