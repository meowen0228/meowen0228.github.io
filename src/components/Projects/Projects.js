import { React, useState } from "react";
import "./Projects.scss";
import { ArrowLeft2 } from "iconsax-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";

function Projects() {
  const test = [
    "0 aaaaaaa",
    "1 aaaaaaa",
    "2 aaaaaaa",
    "3 aaaaaaaaa",
    "個人頁面",
    "好室咖啡",
    "Civil Manage System",
    "7 aaa",
    "8 aaaa",
    "9 aaa",
    "10 aaaa",
    "11 aaaaa",
    "11 aaaaa",
    "11 aaaaa",
  ];
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
        <div className='Projects' id='Projects'>
          <div className='main'>
            <ProjectItem />
          </div>
          <div className='sideBar'></div>
          <Link to='/' className='Arrow ArrowLeft'>
            <ArrowLeft2 size='32' />
          </Link>
        </div>
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

export default Projects;
