import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Showcase from "./components/Showcase";
import FeatureCards from "./components/FeatureCards";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Showcase/>
      <FeatureCards/>
      <Experience/>
      <TechStack/>
      <Contact/>
    </>
  );
};

export default App;
