import React from "react";
import NavBar from "../components/NavBar";
import NavigationMenu from "../components/NavigationMenu";
import { useState } from "react";
const Products = () => {
  const [navigationM, setNavigationM] = useState(false);
  console.log(navigationM);
  return (
    <section>
      <div className="relative z-10 font-Poppins overflow-hidden h-screen">
        <NavBar
          title="Cafe Cravings"
          setNavigation={setNavigationM}
          navigationM={navigationM}
        />
        <NavigationMenu visible={navigationM} setNavigation={setNavigationM} />
        <div className="h-full flex items-center justify-between bg-slate-500 p-2">
          <div className="bg-rose-300 flex flex-col">
            <h1>Espresso</h1>
            <p>description</p>
            <div className="flex gap-4">
              <button>But1</button>
              <button>But2</button>
            </div>
          </div>
          <figure className="bg-purple-400">Image</figure>
        </div>
      </div>
    </section>
  );
};

export default Products;
