import React from 'react';
import hero from '../../assets/hero.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BecomeMemberSection = () => {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  };

  const fromLeft = {
    hidden: { x: -60, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const fromRight = {
    hidden: { x: 60, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const childFade = {
    hidden: { y: 12, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } }
  };

  return (
    <motion.section
      className="flex flex-col-reverse md:flex-row items-center justify-between mt-32 py-6 px-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      {/* Left Content */}
      <motion.div
        className="flex-1 flex flex-col items-start justify-center space-y-6"
        variants={fromLeft}
      >
        <motion.h2 variants={childFade} className="text-3xl md:text-5xl font-bold leading-tight">
          Empowering <span className="text-yellow-600">Service Providers</span> & Members for a Thriving Future
        </motion.h2>

        <motion.p variants={childFade} className="text-gray-600 max-w-md">
          Join Tawun today and unlock new opportunities for growth, collaboration, and success in your community.
        </motion.p>

        <motion.div variants={childFade} className="flex flex-col space-y-4 w-full max-w-sm">
          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 200 }}>
            <Link to="/provider/register" className="bg-[#E8D8B9] text-black font-semibold py-3 rounded-lg text-center block">
              Become a service provider
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 200 }}>
            <Link to="/register" className="border border-[#E8D8B9] text-black font-semibold py-3 rounded-lg text-center block">
              Become a tawun member
            </Link>
          </motion.div>
        </motion.div>

        <motion.div variants={childFade}>
          <p>2K+ professionals registered</p>
          <motion.div className="flex items-center mt-6">
            {[1,2,3,4,5].map((_, idx) => (
              <motion.img
                key={idx}
                src={`https://randomuser.me/api/portraits/men/${idx + 30}.jpg`}
                alt="User"
                className={`w-10 h-10 rounded-full border-2 border-white ${idx !== 0 ? '-ml-4' : ''}`}
                variants={childFade}
                transition={{ delay: 0.05 + idx * 0.04, duration: 0.35 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1 flex justify-center mb-12 md:mb-0"
        variants={fromRight}
      >
        <motion.img
          src={hero}
          alt="Service Illustration"
          className="w-full max-w-lg"
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 120 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default BecomeMemberSection;
