import React from "react";
import Card from "./Card";
import imagePath from "../static/bg-aboutus.png";
import Saurav from "../static/Biste.png";
import Yubraj from "../static/Dada.png";
import Bhandari from "../static/Boks.png";
export default function Reviews(props) {
  return (
    <section className="w-full z-30 h-[500px] flex items-center relative my-20">
      <div className="flex gap-6 h-[80%] p-5 w-full container mx-auto justify-between z-10">
        <div className="w-[450px] flex flex-col gap-5 justify-center">
          <h1 className="font-bold text-3xl">What they say about us</h1>
          <p>
            We always provide the best service and always maintain the quality
            of coffee
          </p>
        </div>
        <Card
          iname={Saurav}
          name="Saurav"
          review="I love Saugat's cock so much. It was smooth af."
        />
        <Card
          iname={Yubraj}
          name="Yubraj"
          review="I really love the cappucino, the coffee was very smooth."
        />
        <Card
          iname={Bhandari}
          name="Bhandari"
          review="The coffee tasted like cum. I loved it because I'm gay."
        />
      </div>
      <img
        src={imagePath}
        alt="YOYo"
        className="absolute z-0 h-full rounded-lg"
      />
    </section>
  );
}
