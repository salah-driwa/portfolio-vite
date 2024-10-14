import  { useState } from 'react';
import { motion } from 'framer-motion';
import {  MdDraw } from 'react-icons/md';
import AnimatedIcon from './Bubble';
import { FiPenTool } from "react-icons/fi";
import { FaGamepad, FaLaptopCode } from 'react-icons/fa';
import ParticleEffect from './ParticleEffect';
import { SiRive } from "react-icons/si";


function Herosection() {
  const [isHovered, setIsHovered] = useState(false);


  // eslint-disable-next-line no-unused-vars
  const handleHover = (hoverState, text) => {
    setIsHovered(hoverState);

  };

  return (
    <div className=' xl:min-h-[120vh] h-[100vh] w-screen flex justify-center relative items-center'>
      <ParticleEffect/>
   
      <motion.div
        initial={{ scale: 0 }}
        animate={{ 
          scale: isHovered ?  0:[0, 1.3, 0.9, 1.1, 1] ,
          x: [0, 0, 10, -10, 10, 0],
          y: [-30, 0, -30, 15, -30, 0],
          
          transition: { 
            x: { repeat: Infinity, duration: 8 },
            y: { repeat: Infinity, duration: 8, repeatType: 'reverse' }
          }
        }}
        transition={{ duration: 1, bounce: 50 }}
      className=' absolute top-1/2 text-3xl text-text  z-20 font-extrabold'>
       Looking for ?
      </motion.div>
      <div className=''>
        <AnimatedIcon 
          positionClasses="top-20 md:top-40 lg:top-60 right-14 md:right-20 lg:right-44 xl:right-[450px]" 
          bgColor={"RGB(5 ,73 ,254, 0.5)"} 
          hoverBgColor={"RGB(5 ,73 ,254)"} 
          onHoverChange={handleHover}
          icon={<FiPenTool  size={50} classname="text-text"/> }
          delay={0}
          link={"https://truedark-portfolio.netlify.app/projects?tab=Design"}
          text="Designs"
           textTop="30%"
  textLeft="-200%"
        />
        <AnimatedIcon 
          positionClasses="top-32 right-20 md:top-64 md:right-40 xl:right-[1200px] lg:top-96 lg:right-[900px]" 
          bgColor="rgba(255, 11, 115, 0.5)" 
          hoverBgColor="rgba(255, 11, 115, 1)" 
          onHoverChange={handleHover}
          icon={<FaLaptopCode  size={50} classname="text-text" />} 
          delay={1.2}
          link={"https://truedark-portfolio.netlify.app/projects?tab=Website"}
          text="Development"
  textTop="30%"
  textLeft="120%"
        />
        <AnimatedIcon 
          positionClasses="top-10 right-80 md:top-20 md:right-160 lg:top-40 lg:right-[650px] xl:right-[900px]" 
          bgColor="rgba(10, 241, 226, 0.5)" 
          hoverBgColor="rgba(10, 241, 226, 1)" 
          onHoverChange={handleHover}
          icon={<MdDraw  size={50} classname="text-text" />} 
          delay={3}
          text="Illustration"
          link={"https://truedark-portfolio.netlify.app/projects?tab=Illustration"}
            textTop="110%"
  textLeft="20%"
        />
        <AnimatedIcon 
          positionClasses="top-48 right-96 md:top-96 md:right-192 lg:top-[650px] lg:right-[450px] xl:right-[860px]" 
          bgColor="rgba(177, 8, 242, 0.5)" 
          hoverBgColor="rgba(177, 8, 242, 1)" 
          onHoverChange={handleHover}
          icon={<FaGamepad size={50} classname="text-text" />} 
          delay={2}
          text="Games"
          link={"https://truedark-portfolio.netlify.app/projects?tab=Games"}
             textTop="-80%"
  textLeft="-150%"
        />
          <AnimatedIcon 
          positionClasses="top-48 right-20 md:top-10 md:right-192 lg:top-[650px] lg:right-[150px] xl:right-[360px]" 
          bgColor="rgba(177, 88, 42, 0.5)" 
          hoverBgColor="rgba(177, 88, 42, 1)" 
          onHoverChange={handleHover}
          icon={<SiRive size={50} classname="text-text" />} 
          delay={2}
          text="character"
             textTop="-120%"
  textLeft="-20%"
       link={"https://truedarkanimations.netlify.app/"}
        />
      </div>
    </div>
  );
}

export default Herosection;