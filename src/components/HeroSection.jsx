import React from "react";
import { motion } from "framer-motion";
import lapImage from "../assets/images/lap.png"; // Transparent PNG

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 bg-black text-white">
      
      {/* Left: Text */}
      <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I am Niveditha Unni
        </h1>
        <p className="text-lg md:text-xl text-white/70 mb-6">
          A Full Stack Developer who builds modern web applications using React, Three.js, and Java.
        </p>
        <a
          href="#work"
          className="bg-white text-[#3661DA] px-6 py-3 font-medium w-max rounded-none flex items-center gap-2 hover:bg-gray-100 transition-all duration-300"
        >
          <span>SEE MY WORK</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* Right: Animated Laptop Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
        <div className="w-80 sm:w-96 md:w-[550px] h-64 sm:h-96 md:h-[350px] rounded-3xl border border-white/30 flex justify-center items-center p-4 relative overflow-visible">
          <motion.img
            src={lapImage}
            alt="Laptop"
            className="absolute w-[300px] sm:w-[400px] md:w-[700px] h-auto object-contain"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
