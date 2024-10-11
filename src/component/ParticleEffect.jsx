import  { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const generateRandomPosition = () => {
  const top = Math.random() * 100 - 10; // random top position between -10% and 110%
  const left = Math.random() * 100 - 10; // random left position between -10% and 110%
  return { top, left };
};

const generateRandomAnimation = () => {
  const duration = Math.random() * 3 + 2; // random duration between 2 and 5 seconds
  const delay = Math.random() * 0; // random delay up to 2 seconds
  const xMovement = Math.random() * 20 - 10; // random x movement between -10 and 10
  const yMovement = Math.random() * 20 - 10; // random y movement between -10 and 10
  return { duration, delay, xMovement, yMovement };
};

const particles = Array.from({ length: 30 }, () => ({
  position: generateRandomPosition(),
  animation: generateRandomAnimation(),
}));

function ParticleEffect() {
  
  const [isIntro, setIsIntro] = useState(true);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setIsIntro(false);
    }, 1000); // Intro animation duration, adjust as needed

    return () => clearTimeout(introTimer);
  }, []);

  return (
    <div className='relative min-h-[125vh]  w-full  overflow-hidden'>
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          initial={{  scale: 0 }}
          animate={isIntro ? { 
            scale: [0, 1.3, 0.9, 1.1, 1], 
            opacity: [0, 0.4, 0.5],
            transition: { duration: 1}
          } : {
            
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.5, 1],
            x: [0, particle.animation.xMovement, -particle.animation.xMovement, particle.animation.xMovement, 0],
            y: [0, -particle.animation.yMovement, particle.animation.yMovement, -particle.animation.yMovement, 0],
            transition: {
              duration: particle.animation.duration,
              delay: particle.animation.delay,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            },
          }}
          className='absolute rounded-full bg-white w-4 h-4'
          style={{ top: `${particle.position.top}%`, left: `${particle.position.left}%`}}
        >
          <div className='relative w-full h-full'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='absolute rounded-full bg-text blur-sm w-full h-full'
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ParticleEffect;
