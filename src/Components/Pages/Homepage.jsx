import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import AboutMe from "./Aboutme";
import Projects from "./Projects";
import Contact from "./Contact";


function Homepage() {


  return (
    <div
    id="home">
      <HeroSection />
      <Cards />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default Homepage;
