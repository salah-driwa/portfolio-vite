import { AiFillAppstore } from "react-icons/ai";
import { FaHome, FaSun, FaMoon } from "react-icons/fa";
import { FaInfoCircle, FaStar } from 'react-icons/fa';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

function MobileNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const size = 20;
  const [navItems] = useState([
    { name: 'Home', icon: <FaHome size={size} />, path: '/' },
    { name: 'Projects', icon: <AiFillAppstore size={size} />, path: '/projects' },
    { name: 'About', icon: <FaInfoCircle size={size} />, path: '/about' },
    { name: 'Skills', icon: <FaStar size={size} />, path: '/skills' },
  ]);

  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const handleNavigation = (path) => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(path);
  };

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: (i) => ({
      scale: 1,
      transition: {
        delay: i * 0.1, // Stagger effect on load
        type: 'spring',
        stiffness: 500,
        damping: 20,
      },
    }),
    hover: {
      scale: 1.2, // Pop effect on hover
      transition: {
        type: 'spring',
        stiffness: 300,
      },
    },
    tap: { scale: 0.9 }, // Slight shrink on tap
  };

  return (
    <div className="fixed bottom-0 z-50 h-18 w-10/12 p-3 bg-[var(--text)] flex justify-around gap-2 items-center mb-5 mx-8 rounded-full shadow-lg">
      {navItems.map((item, index) => (
        <motion.button
          key={index}
          onClick={() => handleNavigation(item.path)}
          className={`flex flex-col p-3 rounded-full items-center ${location.pathname === item.path ? 'bg-white dark:bg-background' : 'bg-transparent'}`}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          custom={index} // Stagger animation using index
          variants={iconVariants}
        >
          <motion.span className={location.pathname === item.path ? 'text-text' : 'text-white dark:text-background'}>
            {item.icon}
          </motion.span>
        </motion.button>
      ))}
      
      <motion.button
        onClick={toggleTheme}
        className={`flex items-center justify-center rounded-full w-10 h-10 ${isDark ? 'bg-white' : 'bg-black'} transition duration-300 ease-in-out transform`}
        variants={iconVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
     
        custom={navItems.length} // Give it a delayed animation after the other icons
      >
        {isDark ? <FaSun size={20} color="black" /> : <FaMoon size={20} color="white" />}
      </motion.button>
    </div>
  );
}

export default MobileNavigation;
