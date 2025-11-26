import React from "react";

import logo1 from "../assets/images/qual.jpg";
import logo2 from "../assets/images/com.jpg";
import logo3 from "../assets/images/deli.jpg";

const abilities = [
  {
    img: logo1,
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    img: logo2,
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    img: logo3,
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const FeatureCards = () => (
  <div className="w-full px-6 md:px-12 py-20">
    <div
      className="
        mx-auto 
        grid grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        gap-6 sm:gap-8 md:gap-10
        max-w-6xl
      "
    >
      {abilities.map(({ img, title, desc }) => (
        <div
          key={title}
          className="
            rounded-xl 
            p-6 sm:p-7 md:p-8 
            flex flex-col gap-4 
            bg-white/5 
            border border-white/10 
            hover:bg-white/10 
            transition-all duration-300 
            w-[90%] sm:w-full mx-auto
          "
        >
          <div className="size-14 flex items-center justify-center rounded-full bg-white/10 p-3 mx-auto sm:mx-0">
            <img src={img} alt={title} className="w-10 h-10 object-contain" />
          </div>

          <h3 className="text-white text-xl sm:text-2xl font-semibold mt-2 text-center sm:text-left">
            {title}
          </h3>

          <p className="text-white/60 text-base sm:text-lg leading-relaxed text-center sm:text-left">
            {desc}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;
