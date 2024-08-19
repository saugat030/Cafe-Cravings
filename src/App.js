import "./App.css";
import LandingPortion from "./components/LandingPortion";
import NavBar from "./components/NavBar";
import PopularNow from "./components/PopularNow";

function App() {
  return (
    <body class="bg-[#F6EBDA] font-Poppins text-[#2f2105] w-screen overflow-x-hidden">
      <div className="relative z-10">
        <NavBar />
        <LandingPortion />
      </div>
      <PopularNow />
    </body>
  );
}

export default App;
