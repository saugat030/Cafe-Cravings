import "./App.css";
import AboutUS from "./components/AboutUS";
import ForYou from "./components/ForYou";
import LandingPortion from "./components/LandingPortion";
import NavBar from "./components/NavBar";
import PopularNow from "./components/PopularNow";
import Services from "./components/Services";

function App() {
  return (
    <div className="bg-[#F5FEFD] font-Poppins text-[#2f2105] overflow-x-hidden h-screen overflow-y-auto">
      <div className="relative z-10 bg-[#F6EBDA]">
        <NavBar title="Kum Coffee" />
        <LandingPortion />
      </div>
      <PopularNow />
      <Services />
      <AboutUS />
      <ForYou />
    </div>
  );
}

export default App;
