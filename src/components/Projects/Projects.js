import { React, useState } from "react";
import "./Projects.scss";
import { ArrowDown2, ArrowRight2 } from "iconsax-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";

function Projects() {
  const [selectIndex, setSelectIndex] = useState(0);
  const test = [
    "個人頁面",
    "好室咖啡",
    "Civil Manage System",
    "Coming Soon",
    "Coming Soon",
    "Coming Soon",
    "Coming Soon",
    "Coming Soon",
  ];
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
          <div className='sideBar'>
            <div
              className='mainCircle'
              style={{
                transform: `rotate(${-(360 / test.length) * selectIndex}deg)`,
              }}
            >
              {test.map((v, i) => {
                return (
                  <div
                    className='circle'
                    style={{
                      transform: `rotate(${(360 / test.length) * i}deg)`,
                      fontWeight: i === selectIndex ? "bold" : "normal",
                      opacity: i === selectIndex ? 1 : 0.6,
                    }}
                  >
                    <motion.div
                      className='button'
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        background: "",
                        backgroundImage: "",
                      }}
                      exit={{ opacity: 0 }}
                      whileHover={{
                        scale: 1.1,
                        backgroundImage:
                          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(93,139,123,0.2) 50%, rgba(255,255,255,0) 100%)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSelectIndex(i);
                      }}
                    >
                      {v}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
          <Link to='/' className='Arrow ArrowLeft'>
            <ArrowRight2 size='32' color='#a5a9aa' />
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
