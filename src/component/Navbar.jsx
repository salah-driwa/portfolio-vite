import { FaHome, FaInfoCircle, FaMoon, FaStar, FaSun } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section from './Section_animation';

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


  return (
    <motion.nav
      className={`sm:flex items-center justify-between fixed w-full h-fit sm:h-20 text-secondary-button z-50 
        sm:py-4 sm:px-20  border-opacity-50 `}
      initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
      animate={{
        backgroundColor: isScrolled ? 'var(--accent)' : 'rgba(0, 0, 0, 0)',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex px-6 py-3 bg-accent sm:bg-transparent">
        <Section x={0} y={-40}>
          <Link to="/" onClick={() => setIsHovered({})} className="flex items-center">
            <h1 className="sm:text-2xl font-bold text-text">Portfolio</h1>
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

        {NAV_ITEMS.map(({ name, icon, path, animation }) => (
          <Link
            key={name}
            to={path}
            onMouseEnter={() => handleHover(name)}
            onMouseLeave={() => handleHover(name)}
            className={`flex items-center space-x-2 cursor-pointer hover:font-semibold ${
              isHovered[name] ? 'text-primary' : ''
            }`}
          >
            <motion.div animate={isHovered[name] ? animation : {}}>
              {icon}
            </motion.div>
            <span>{name}</span>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
