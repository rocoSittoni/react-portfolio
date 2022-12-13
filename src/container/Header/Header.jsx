import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
    return (
        <div id="home" className="app__header app__flex">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__header-img"
          >
            <h1 className="head-text">Hi,
            <br />
            i'm
            <span> Roco,</span>
            <br />
            Web  
            <span> Developer</span>
            </h1>
            <motion.img
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              src={images.circle}
              alt="profile_circle"
              className="overlay_circle"
            />
          </motion.div>

          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circles"
          >
            {[images.react, images.angular, images.rxjs].map((circle, index) => (
              <div className="circle-cmp app__flex" key={`circle-${index}`}>
                <img src={circle} alt="profile_bg" />
              </div>
            ))}
          </motion.div>
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-right"
          >
            {[images.docker, images.node, images.nest].map((circle, index) => (
              <div className="circle-cmp app__flex" key={`circle-${index}`}>
                <img src={circle} alt="profile_bg" />
              </div>
            ))}
          </motion.div>
        </div>
    )
};

export default AppWrap(Header, 'home');