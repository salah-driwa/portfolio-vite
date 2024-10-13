import { FaHome, FaInfoCircle, FaMoon, FaStar, FaSun } from 'react-icons/fa';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

import { Link   } from 'react-scroll';
import { motion } from 'framer-motion';
import { useState ,useEffect } from 'react';

import Section from './Section_animation';
//import { useLanguage } from './context/languagecontxt';

const Navbar = () => {

  const [isHovered, setIsHovered] = useState({
    home: false,
    about: false,
    popular: false,
    explore: false,
  });
  const [isScrolled, setIsScrolled] = useState(false);


  const handleHover = (menuItem) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [menuItem]: !prevState[menuItem],
    }));
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isScrolled = scrollTop > 50; // Change the value to adjust when the scroll is considered "a bit"
      setIsScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


 
    //const {  changeLanguage } = useLanguage();
  
   



    const [isDark, setIsDark] = useState(false);

  
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setIsDark(savedTheme === 'dark');
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      }
    }, []);
  
    const toggleTheme = () => {
      const newTheme = isDark ? 'light' : 'dark';
      setIsDark(!isDark);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      localStorage.setItem('theme', newTheme);
    };
  












  return (
<motion.nav 
    className={`sm:flex sm:items-center justify-between sm:py-4 sm:px-20 align-top text-text 
         sm:border-none border border-gray-300 border-opacity-50
      h-fit text-secondary-button sm:h-20 w-full fixed z-50  `}
    
      initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
      animate={{
        backgroundColor: isScrolled ? 'var(--accent)' : 'rgba(0, 0, 0, 0)',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none'
      }}
      
      transition={{ duration: 0.3 }}
    >
    <div className=' flex px-6 py-3  bg-accent sm:bg-transparent  '>
          <Section x={0} y={-40}>
     
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="flex items-center align-top"
        onClick={() => setIsHovered({ home: false, about: false, popular: false, explore: false })}
      >
       
        <h1  className="sm:text-2xl font-bold    text-text"> Portfolio</h1>

      </Link>
      </Section>
   
        </div>

      <div className="sm:flex items-center sm:space-x-20 hidden ">
        
      <motion.button
                  whileHover={{ scale: 1.2 ,rotate:360 }}
              
                  onClick={toggleTheme}
                  className={`flex items-center justify-center ${isDark ? 'bg-white' : 'bg-black'} absolute rounded-full w-10 h-10`}
                >
                  {isDark ? <FaSun size={26} color="black" /> : <FaMoon size={26} color="white" />}
                </motion.button>
        {/* Home */}
        <Link
          to="home"
          smooth={true}
          duration={1000}
          className={`flex items-center space-x-2 cursor-pointer hover:font-semibold ${
            isHovered.home ? 'text-primary' : ''
          }`}
          onMouseEnter={() => handleHover('home')}
          onMouseLeave={() => handleHover('home')}
        >
          <motion.div animate={{ y: isHovered.home ? -5 : 0 }}>
            <FaHome className="sm:text-xl" />
          </motion.div>
          <span>Home</span>
        </Link>

        {/* About */}
        <Link
          to="about"
          smooth={true}
          duration={1000}
          offset={-100}
          className={`flex cursor-pointer items-center space-x-2 hover:font-semibold ${
            isHovered.about ? 'text-primary' : ''
          }`}
          onMouseEnter={() => handleHover('about')}
          onMouseLeave={() => handleHover('about')}
        >
          <motion.div animate={{ rotate: isHovered.about ? 360 : 0 }}>
            <FaInfoCircle className="sm:text-xl" />
          </motion.div>
          <span>About</span>
        </Link>

        {/* Popular */}
        <Link
          to="skills"
          smooth={true}
          duration={1000}
          offset={-100}
          className={`flex cursor-pointer items-center space-x-2 hover:font-semibold ${
            isHovered.popular ? 'text-primary' : ''
          }`}
          onMouseEnter={() => handleHover('popular')}
          onMouseLeave={() => handleHover('popular')}
        >
          <motion.div
            animate={{ scale: isHovered.popular ? [1, 1.3, 1] : 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaStar className="sm:text-xl" />
          </motion.div>
          <span>Skills</span>
        </Link>

        {/* Explore */}
        <Link
          to="project"
          smooth={true}
          duration={1000}
          offset={-100}
          className={`flex cursor-pointer items-center space-x-2 hover:font-semibold ${
            isHovered.explore ? 'text-primary' : ''
          }`}
          onMouseEnter={() => handleHover('explore')}
          onMouseLeave={() => handleHover('explore')}
        >
          <motion.div animate={{ rotate: isHovered.explore ? 360 : 0 }} transition={{ duration: 0.5 }}>
            <AiOutlineFundProjectionScreen className="sm:text-xl" />
          </motion.div>
          <span>Projects</span>
        </Link>

         
      
      </div>
    

    
      
    </motion.nav>
 
  );
};

export default Navbar;
