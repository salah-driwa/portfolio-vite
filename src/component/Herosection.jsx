import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdDraw } from 'react-icons/md';
import { FiPenTool } from 'react-icons/fi';
import { FaGamepad, FaLaptopCode } from 'react-icons/fa';
import { SiRive } from 'react-icons/si';
import ParticleEffect from './ParticleEffect';
import AnimatedIcon from './Bubble';

function Herosection() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hoverState) => setIsHovered(hoverState);

  return (
    <div className="h-[130vh] w-screen flex justify-center items-center relative">
      <ParticleEffect />

      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: isHovered ? 0 : [0, 1.3, 0.9, 1.1, 1],
          x: [0, 0, 10, -10, 10, 0],
          y: [-30, 0, -30, 15, -30, 0],
          transition: {
            x: { repeat: Infinity, duration: 8 },
            y: { repeat: Infinity, duration: 8, repeatType: 'reverse' },
          },
        }}
        transition={{ duration: 1, bounce: 50 }}
        className="absolute top-1/2 text-3xl text-text font-extrabold z-20"
      >
        Looking for?
      </motion.div>

      <div className="relative w-full h-full">
        <AnimatedIcon
          positionClasses="absolute top-[18vh] right-[19vw]"
          bgColor="rgba(5, 73, 254, 0.5)"
          hoverBgColor="rgba(5, 73, 254, 1)"
          onHoverChange={handleHover}
          icon={<FiPenTool size={50} />}
          link="https://truedark-portfolio.netlify.app/projects?tab=Design"
          text="Designs"
          delay={2}
        />
        <AnimatedIcon
          positionClasses="absolute top-[35vh] right-[70vw]"
          bgColor="rgba(255, 11, 115, 0.5)"
          hoverBgColor="rgba(255, 11, 115, 1)"
          onHoverChange={handleHover}
          icon={<FaLaptopCode size={50} />}
          link="https://truedark-portfolio.netlify.app/projects?tab=Website"
          text="Development"
          delay={0.2}
        />
        <AnimatedIcon
          positionClasses="absolute top-[15vh] right-[50vw]"
          bgColor="rgba(10, 241, 226, 0.5)"
          hoverBgColor="rgba(10, 241, 226, 1)"
          onHoverChange={handleHover}
          icon={<MdDraw size={50} />}
          link="https://truedark-portfolio.netlify.app/projects?tab=Illustration"
          text="Illustration"
          delay={1}
        />
        <AnimatedIcon
          positionClasses="absolute top-[68vh] right-[60vw]"
          bgColor="rgba(177, 8, 242, 0.5)"
          hoverBgColor="rgba(177, 8, 242, 1)"
          onHoverChange={handleHover}
          icon={<FaGamepad size={50} />}
          link="https://truedark-portfolio.netlify.app/projects?tab=Games"
          text="Games"
          delay={1.5}
        />
        <AnimatedIcon
          positionClasses="absolute top-[70vh] right-[25vw]"
          bgColor="rgba(177, 88, 42, 0.5)"
          hoverBgColor="rgba(177, 88, 42, 1)"
          onHoverChange={handleHover}
          icon={<SiRive size={50} />}
          link="https://truedarkanimations.netlify.app/"
          text="Character"
          delay={0.8}
          
        />
      </div>
    </div>
  );
}

export default Herosection;
