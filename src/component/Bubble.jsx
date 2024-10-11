/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedIcon = ({ positionClasses, bgColor, hoverBgColor, onHoverChange, delay, icon, text, link, textTop = '60%', textLeft = '110%' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroDone(true);
    }, delay); // Use the delay prop
    return () => clearTimeout(timer);
  }, [delay]);

  const innerDivVariants = {
    initial: { opacity: 0, width: '8rem', height: '8rem', filter: 'blur(30px)' },
    animate: { opacity: 1 },
    hover: { 
      opacity: 1, 
      width: '16rem', 
      height: '16rem', 
      filter: 'blur(120px)' 
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverChange(true, text);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverChange(false, '');
  };

  const textShadowStyle = {
    color: 'text-text',
    textShadow: `
      0 0 7px ${bgColor},
      0 0 10px ${bgColor},
      0 0 20px ${bgColor},
      0 0 82px ${bgColor},
      0 0 92px ${bgColor},
      0 0 102px ${bgColor},
      0 0 151px ${bgColor}
    `
  };



  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <motion.div
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={!introDone ? { 
        scale: [0, 1.3, 0.9, 1.1, 1], 
        transition: { duration: 2 }
      } : {
        scale: isHovered ?  1.1:1,
        rotate: isHovered ? 0 : 0 ,
        x: [0, 10, -10, 10, 0],
        y: [0, -30, 15, -30, 0],
        width: isHovered ? "12rem": "8rem",
        height: isHovered ? "12rem": "8rem",
        transition: { 
          x: { repeat: Infinity, duration: 8 ,delay:delay },
          y: { repeat: Infinity, duration: 8, repeatType: "reverse" ,delay:delay },
          width: { type: "spring", stiffness: 100, damping: 10 },  // Bonus: Add spring animation to width
      height: { type: "spring", stiffness: 100, damping: 10 }  // Bonus: Add spring animation to height
 
        }
      }}
      transition={{ duration: 0.2 ,delay:delay }}
      className={` absolute rounded-full flex flex-col z-10 backdrop-blur-xl  items-center justify-center ${positionClasses}`}
      style={{ backgroundColor: bgColor, transformOrigin: 'center', backdropFilter: 'blur(10px)', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', border: '1px solid rgba(255, 255, 255, 0.6)', cursor: 'pointer' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    > 
      <div className='z-20'>{icon}</div> 
      <motion.div
        variants={innerDivVariants}
        initial="initial"
        animate={isHovered ? "hover" : "animate"}
        transition={{ duration: 0.2 }}
        className='absolute rounded-full'
        style={{ backgroundColor: hoverBgColor }}
      ></motion.div>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity:isHovered ? 1 :0,
             scale:isHovered ? 1 :0 ,
         
   
          }}
          transition={{ duration: 0.3, scale: {
            type: "spring",
            damping: 7,
            stiffness: 100,
            restDelta: 0.001
          }
          }}
          className=' py-10 absolute top-20    h-10'
     
        >
          <div className='   z-10 mx-auto w-full text-center h-10 font-bold text-2xl ' style={textShadowStyle}>
            {text}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AnimatedIcon;
