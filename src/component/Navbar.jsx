import { FaHome, FaInfoCircle, FaStar } from 'react-icons/fa';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {MdMenu,MdMenuOpen}from 'react-icons/md'
import { Link   } from 'react-scroll';
import { motion } from 'framer-motion';
import { useState ,useEffect } from 'react';

import Section from './Section_animation';
//import { useLanguage } from './context/languagecontxt';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState({
    home: false,
    about: false,
    popular: false,
    explore: false,
  });
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

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
  
    const handleLanguageChange = (lng) => {
    //  changeLanguage(lng);
      console.log(lng)
      // You can add additional logic here if needed
    };
  return (
<motion.nav
    className={`sm:flex sm:items-center justify-between sm:py-4 sm:px-20 align-top text-white bg-[#012D54] sm:border-none border border-gray-300 border-opacity-50
      h-fit text-secondary-button sm:h-20 w-full fixed z-50 `}
    
      initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
      animate={{
        backgroundColor: isScrolled ? 'rgb(0,38,61, 0.9)' : 'rgba(0, 0, 0, 0)',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none'
      }}
      
      transition={{ duration: 0.3 }}
    >
    <div className=' flex px-6 py-3  bg-[#012D54] sm:bg-transparent  '>
          <Section x={0} y={-40}>
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="flex items-center align-top"
        onClick={() => setIsHovered({ home: false, about: false, popular: false, explore: false })}
      >
       
        <h1 className="sm:text-2xl font-bold    text-white">Portfolio</h1>

      </Link>
      </Section>
      <button
          className="flex flex-col align-top    ml-auto space-x-2 cursor-pointer hover:font-semibold sm:hidden "
          onClick={handleMobileMenuToggle}
        >
          <span>{isMobileMenuOpen? <MdMenuOpen size={30}/> :<MdMenu size={30}/>  }</span>
        </button>
        </div>

      <div className="sm:flex items-center sm:space-x-20 hidden ">
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


        <div className="relative inline-block text-left group">
      <span className="rounded-md shadow-sm">
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-700 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          Language
        </button>
      </span>

      <div className="hidden absolute z-10  space-y-2 bg-white border rounded-md shadow-lg group-hover:block">
        <button
          onClick={() => handleLanguageChange('en')}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          English
        </button>
        <button
          onClick={() => handleLanguageChange('fr')}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          French
        </button>
        {/* Add more language options as needed */}
      </div>
    </div>

      </div>
    

      {/* Mobile Menu ***************************************************************************/}
      <div className="sm:hidden block w-full">
  {isMobileMenuOpen && (
    <motion.div initial={{y:-60}}
    animate={{y:[10,0]}}
    className="flex flex-col w-full px-6 bg-[#012D54]  ">
      <motion.div
      
      initial={{x:10, opacity :0}}
      animate={{x:0, opacity :1}}
      transition={{ delay: 0 }}
      >
      <Link
        to="home"
        smooth={true}
        duration={1000}
        
        className="flex items-center space-x-2 cursor-pointer hover:font-semibold py-3 border-t border-gray-300 border-opacity-50"
        onClick={handleMobileMenuToggle}
      >
        <FaHome className="sm:text-xl" />
        <span>Home</span>
      </Link>
      </motion.div>
      <motion.div
      initial={{x:10, opacity :0}}
      animate={{x:0, opacity :1}}
      transition={{ delay: 0.1 }}
      >
      <Link
       
        to="about"
        smooth={true}
        offset={-200}
        duration={1000}
        className="flex items-center space-x-2 cursor-pointer hover:font-semibold py-3 border-t border-gray-300 border-opacity-50"
        onClick={handleMobileMenuToggle}
      >
        <FaInfoCircle className="sm:text-xl" />
        <span>About</span>
      </Link>
      </motion.div>
      <motion.div
      initial={{x:10, opacity :0}}
      animate={{x:0, opacity :1}}
      transition={{ delay: 0.2 }}
      >
      <Link
        to="skills"
        smooth={true}
        duration={1000}
        offset={-100}
        className="flex items-center space-x-2 cursor-pointer hover:font-semibold py-3 border-t border-gray-300 border-opacity-50"
        onClick={handleMobileMenuToggle}
      >
        <FaStar className="sm:text-xl" />
        <span>Skills</span>
      </Link>
      </motion.div>


      <motion.div
      initial={{x:10, opacity :0}}
      animate={{x:0, opacity :1}}
      transition={{ delay: 0.3 }}
      > 
      <Link
        to="project"
        smooth={true}
        duration={1000}
        offset={-100}
        className="flex items-center space-x-2 cursor-pointer hover:font-semibold py-3 border-t  border-gray-300 border-opacity-50"
        onClick={handleMobileMenuToggle}
      >
        <AiOutlineFundProjectionScreen className="sm:text-xl" />
        <span>Projects</span>
      </Link>
      </motion.div>
    </motion.div>
  )}
</div>

      
    </motion.nav>
 
  );
};

export default Navbar;
