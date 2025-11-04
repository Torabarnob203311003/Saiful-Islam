import React from "react";
import bannerImage from '../../assets/banner.png'; // Adjust the path as necessary
import { motion } from 'framer-motion';

const Banner = () => {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  };

  const fadeUp = {
    hidden: { y: 12, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } }
  };

  return (
    <motion.div className="bg-cover bg-center p-6 md:p-8 lg:p-10" style={{ backgroundImage: `url(${bannerImage})` }} initial="hidden" animate="visible" variants={container}>
      <div className=" bg-opacity-80 max-w-6xl mx-auto text-center p-8 rounded-lg">
        <div className="text-white">
          <motion.h1 variants={fadeUp} style={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "24px", lineHeight: "100%", letterSpacing: "0%", textAlign: "center" }} className="mb-4">
            From Everyday Essentials to Specialized
          </motion.h1>
          <motion.h2 variants={fadeUp} style={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "24px", lineHeight: "100%", letterSpacing: "0%", textAlign: "center" }} className="mb-6">
            Solutions Find It All On-
          </motion.h2>
        </div>
        
        <motion.div variants={fadeUp} className="mb-8 ">
          <motion.span className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">TAWUN</motion.span>
        </motion.div>
        
        <motion.button variants={fadeUp} className="bg-white text-[#6F5B36] font-semibold py-3 px-8 rounded-full text-lg transition duration-300 hover:scale-105" whileHover={{ scale: 1.04 }}>
          Browse all
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Banner;
