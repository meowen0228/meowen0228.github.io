import React from "react";
import "./AboutMe.scss";
import { motion } from "framer-motion";
import { ReactComponent as Monitor } from "../../svg/monitor.svg";
import { ReactComponent as Desk } from "../../svg/desk.svg";
function AboutMe() {
  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };
  return (
    <motion.main
      className='main__container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className='AboutMe' id='AboutMe'>
        <Monitor />
        <Desk />
      </div>
    </motion.main>
  );
}

export default AboutMe;
