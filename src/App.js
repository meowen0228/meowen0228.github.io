import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./components/HomePage/HomePage";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence location={location} key={location.pathname}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='AboutMe' element={<AboutMe />} />
        <Route path='Projects' element={<Projects />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
