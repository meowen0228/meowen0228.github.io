import { React } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

import SocialInfo from "./SocialInfo";
import HomeParticles from "./HomeParticles";

import "./HomePage.scss";
import avatar from "./S__32448516.jpg";

function HomePage() {
  const context = [
    "全端工程師",
    "在家擔任高級鏟屎官",
    "家事達人",
    "會煮泡麵加蛋",
    "喜歡高麗菜",
    "會做美甲",
  ];
  return (
    <>
      <motion.main
        className='main__container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className='HomePage' id='HomePage'>
          <HomeParticles />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className='main'>
              <div className='left_side'>
                <div className='avatar'>
                  {/* <motion.div
                    className='imgFlash'
                    initial={{
                      left: 0,
                      bottom: "-80%",
                    }}
                    animate={{
                      left: "100%",
                      bottom: "20%",
                      transition: { delay: 1.8, duration: 2, ease: "circOut" },
                    }}
                  /> */}
                  <img alt='my cat' src={avatar} />
                </div>
                <h1>Meowen</h1>
                <SocialInfo />
                <div className='my_title'>
                  {context.map((v, i) => {
                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 100 + i * 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 + i / 5 }}
                        key={i}
                      >
                        <div>{v}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              {/* <div className='right_side'>
              <pre>目前職稱為全端工程師</pre>
            </div> */}
            </div>
          </motion.div>
          <Link to='/AboutMe' className='Arrow ArrowLeft'>
            <ArrowLeft2 size='32' />
          </Link>
          <Link to='/Projects' className='Arrow ArrowRight'>
            <ArrowRight2 size='32' />
          </Link>
        </div>
      </motion.main>
      {/* <motion.div
        initial={{ scaleX: 2, left: "100%" }}
        animate={{
          scaleX: -1,
          left: "0%",
          transition: { duration: 1.6, ease: "circOut" },
        }}
        style={{ originX: 0 }}
        className='privacy-screen'
      /> */}
    </>
  );
}

export default HomePage;
