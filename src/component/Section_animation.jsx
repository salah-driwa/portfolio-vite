/* eslint-disable react/prop-types */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Section = ({
  children,
  opacity = 0,
  x = -500,
  y = 0,
  duration = 0.9,
  delay = 0,
  scale = 1,
  blur = 'none'
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0)',
      transition: {
        duration,
        delay
      },
      scale: 1
    },
    hidden: {
      opacity,
      x,
      y,
      filter: `blur(${blur})`,
      scale
    }
  };

  return (
    <section ref={ref} className=' w-full snap-center'>
      <motion.div
        variants={variants}
        initial="hidden"
        className='w-full'
        animate={inView ? 'visible' : 'hidden'}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
