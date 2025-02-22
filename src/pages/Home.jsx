import React from "react";
import AboutUS from "../components/AboutUS";
import ForYou from "../components/ForYou";
import LandingPortion from "../components/LandingPortion";
import NavBar from "../components/NavBar";
import PopularNow from "../components/PopularNow";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import NavigationMenu from "../components/NavigationMenu";
import { useState } from "react";
const Home = () => {
  const [navigationM, setNavigationM] = useState(false);
  return (
    <div className="bg-[#F5FEFD] font-Poppins text-[#2f2105] overflow-x-hidden">
      <div className="relative z-10 bg-[#F6EBDA]">
        <NavBar
          title="Cafe Cravings"
          setNavigation={setNavigationM}
          navigationM={navigationM}
        />
        <NavigationMenu visible={navigationM} setNavigation={setNavigationM} />
        <LandingPortion />
      </div>
      <PopularNow />
      <Services />
      <AboutUS />
      <ForYou />
      <Reviews />
    </div>
  );
};

export default Home;
