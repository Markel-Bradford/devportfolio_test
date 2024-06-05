import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Homepage from "./Pages/Homepage";
import AboutMe from "./Pages/Aboutme";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

function AnimatedRoutes() {
    const location = useLocation();

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-me" element={<AboutMe/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default AnimatedRoutes;
