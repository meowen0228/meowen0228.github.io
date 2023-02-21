import { React, useState } from "react";
import "./Projects.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectItem(props) {
  const [selectIndex, setSelectIndex] = useState(0);
  return (
    <>
      <motion.main
        className='main__container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        123456
      </motion.main>
      <motion.div
        initial={{ scaleX: 2 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 3, ease: "circIn" } }}
        style={{ originX: 0 }}
        className='privacy-screen'
      />
    </>
  );
}

export default ProjectItem;
