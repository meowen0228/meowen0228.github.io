import React from "react";
import "./HomePage.scss";
import SocialInfo from "./SocialInfo";
import { ArrowDown2, ArrowRight2 } from "iconsax-react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import avatar from "./S__32448516.jpg";

function HomePage() {
  return (
    <>
      <motion.main
        className='main__container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className='HomePage' id='HomePage'>
          <div className='main'>
            <div className='left_side'>
              <div className='avatar'>
                <img alt='my cat' src={avatar} />
              </div>
              <h1>Meowen</h1>
              <SocialInfo />
              <div className='my_title'>
                <div>全端工程師</div>
                <div>在家擔任高級鏟屎官</div>
                <div>家事達人</div>
                <div>會煮泡麵加蛋</div>
                <div>喜歡高麗菜</div>
                <div>會做美甲</div>
              </div>
            </div>
            {/* <div className='right_side'>
              <pre>目前職稱為全端工程師</pre>
            </div> */}
          </div>
          <Link to='/AboutMe' className='Arrow ArrowDown'>
            <ArrowDown2 size='32' color='#a5a9aa' />
          </Link>
          <Link to='/Projects' className='Arrow ArrowRight'>
            <ArrowRight2 size='32' color='#a5a9aa' />
          </Link>
        </div>
      </motion.main>
      {/* <motion.div
        initial={{ scaleX: 2 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 3, ease: "circIn" } }}
        style={{ originX: 0 }}
        className='privacy-screen'
      /> */}
    </>
  );
}

export default HomePage;
