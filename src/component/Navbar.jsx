/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { FaHome, FaInfoCircle, FaMoon, FaStar, FaSun } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section from './Section_animation';
import { useLocation } from 'react-router-dom'; // Import useLocation
import    Logo  from '../assets/LogoSvg.svg';
import LogoLight  from '../assets/LogoSvgLight.svg';

const NAV_ITEMS = [
  { name: 'Home', icon: <FaHome />, path: '/', animation: { y: -5 } },
  { name: 'About', icon: <FaInfoCircle />, path: 'about', animation: { rotate: 360 } },
  { name: 'Skills', icon: <FaStar />, path: 'skills', animation: { scale: [1, 1.3, 1] } },
  { name: 'Projects', icon: <AiOutlineFundProjectionScreen />, path: 'projects', animation: { rotate: 360 } },
];

const Navbar = () => {
  const [isHovered, setIsHovered] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark'; // Initialize state based on localStorage
  });
  const location = useLocation(); // Get current route

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(newTheme === 'dark');
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // Ensure the correct theme is applied on load
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHover = (name) => setIsHovered((prev) => ({ ...prev, [name]: !prev[name] }));

  // Animation for staggered effect on nav items
  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,  // 0.2 seconds delay for each item
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.nav
    className={`sm:flex items-center justify-between fixed w-full h-fit sm:h-20 text-secondary-button z-50 
      sm:py-4 sm:px-20 border-opacity-50 bg-primary bg-gradient-to-b from-blue-400/20 light:from-gray-500 to-transparent`}
  
      animate={{
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex px-6 py-3 relative bg-accent sm:bg-transparent">
        <Section x={0} y={-40}>
        <Link to="/" onClick={() => setIsHovered({})} className="flex items-center cursor-pointer">
  <img src={isDark ?Logo :LogoLight} className={`w-36 h-16 transition-all duration-300 ${isHovered ? "text-blue-500" : "text-white"}`} />
  {isHovered ? <img src={Logo} className={`w-36 h-16 blur-2xl top-0 absolute transition-all duration-300 ${isHovered ? "text-blue-500" : "text-white"}`} /> : ""}
</Link>

        </Section>
      </div>

      <div className="sm:flex items-center sm:space-x-20 hidden">
        <motion.button
          whileHover={{ scale: 1.2, rotate: 360 }}
          onClick={toggleTheme}
          className={`absolute rounded-full w-10 h-10 flex items-center justify-center ${
            isDark ? 'bg-white' : 'bg-black'
          }`}
        >
          {isDark ? <FaSun size={26} color="black" /> : <FaMoon size={26} color="white" />}
        </motion.button>

        {NAV_ITEMS.map(({ name, icon, path, animation }, index) => {
  const isActive = location.pathname === '/' + path || (location.pathname === '/' && path === '/'); // Ensure matching

  return (
    <motion.div
      key={name}
      custom={index}
      initial="hidden"
      animate="visible"
      variants={navItemVariants}
      className="flex"
    >
   <Link
  to={path}
  onMouseEnter={() => handleHover(name)}
  onMouseLeave={() => handleHover(name)}
  className={`flex items-center space-x-2 cursor-pointer font-small-display font-normal
    ${isActive ? 'border-b-2 border-primary text-text opacity-100' : ''}
    ${isHovered[name] ? 'opacity-100 scale-110' : ''}
    ${!isActive && !isHovered[name] ? 'opacity-60' : ''}`
  }
>
        <motion.div className={` ${isActive ? '' : '  '}  `} animate={isHovered[name] ? animation : {}}>
          {icon}
        </motion.div>
        <span className="">{name}</span>
      </Link>
    </motion.div>
  );
})}


      </div>
    </motion.nav>
  );
};

export default Navbar;
