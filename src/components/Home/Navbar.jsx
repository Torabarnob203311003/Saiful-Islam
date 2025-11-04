import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import logo from '../../assets/logo.png';
import trans from '../../assets/trans.png';
import message from '../../assets/message.png';
import search from '../../assets/search.png';
import notifi from '../../assets/notifi.png';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { user} = useContext(AuthContext);

  // framer-motion variants
  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } }
  };

  const itemHover = { y: -3, scale: 1.02 };
  const MotionLink = motion(Link);

  return (
    <motion.nav
      className="flex justify-between items-center py-6 px-32"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="flex items-center">
        <div className="mr-6">
          <MotionLink to="/" whileHover={{ scale: 1.03 }}>
            <motion.img src={logo} alt="Tawun Logo" className="h-10 pr-10" whileHover={{ rotate: 0.5 }} />
          </MotionLink>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <MotionLink
            to="/"
            className="text-black font-medium pb-1 border-b-2 border-transparent hover:border-[#E0D1AF] transition-colors"
            whileHover={itemHover}
          >
            Home
          </MotionLink>

          <MotionLink
            to="/service"
            className="text-black font-medium pb-1 border-b-2 border-transparent hover:border-[#E0D1AF] transition-colors"
            whileHover={itemHover}
          >
            Services
          </MotionLink>

          <MotionLink
            to="/about"
            className="text-black font-medium pb-1 border-b-2 border-transparent hover:border-[#E0D1AF] transition-colors"
            whileHover={itemHover}
          >
            About Us
          </MotionLink>

          <MotionLink
            to="/contact"
            className="text-black font-medium pb-1 border-b-2 border-transparent hover:border-[#E0D1AF] transition-colors"
            whileHover={itemHover}
          >
            Contact Us
          </MotionLink>
        </div>
      </div>
      
      <div className="flex items-center">
        <motion.div className="hidden md:block relative mr-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          <input 
            type="text" 
            placeholder="Search for any service or provider"
            className="px-4 py-2 pr-8 border border-gray-300 rounded-full w-[418px] h-[45px]" 
            style={{ borderRadius: '83px' }}
          />
          <motion.img src={search} alt="Search Icon" className="absolute right-3 top-2.5" whileHover={{ scale: 1.05 }} />
        </motion.div>
        
        <div className="flex space-x-3 items-center">
          <MotionLink to="/chat" className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-100" whileHover={{ scale: 1.05 }}>
            <img src={message} alt="Message Icon" />
          </MotionLink>

          <MotionLink to="/notifications" className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-100" whileHover={{ scale: 1.05 }}>
            <img src={notifi} alt="Notification Icon" />
          </MotionLink>

          {user ? (
            <MotionLink to="/user/dashboard" whileHover={{ scale: 1.05 }}>
              <motion.img 
                src={user?.user_information && user?.user_information?.image || '/default-profile.png'} 
                alt="User" 
                className="w-8 h-8 rounded-full border border-gray-300"
                whileHover={{ scale: 1.08 }}
              />
            </MotionLink>
          ) : (
            <MotionLink 
              to="/login" 
              className="text-white px-4 py-1 text-sm" 
              style={{
                width: '130px',
                height: '32px',
                borderRadius: '8px',
                background: '#E0D1AF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Login
            </MotionLink>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
