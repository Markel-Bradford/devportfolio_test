import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import { motion } from "framer-motion";
import AboutMe from "./Aboutme";
import Projects from "./Projects";
import Contact from "./Contact";


function Homepage() {


  return (
    <motion.div
      initial={{ opacity:  0}}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}>
      <HeroSection />
      <Cards />
      <AboutMe />
      <Projects />
      <Contact />
    </motion.div>
  );
}

export default Homepage;
