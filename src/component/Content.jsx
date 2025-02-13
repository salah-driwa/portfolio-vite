import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Programmer from './IntroductionSection/Programmer';
import Description from './IntroductionSection/Descrption';

import Section from './Section_animation';
import Rive from './rive/Rive';
import SectionCard from './IntroductionSection/SectionCard';
import ShinyText from "./ShinyText";

const Content = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  const sectionRef = useRef(null);

  // Track visibility of the parent section (containing all the cards)
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div className="mt-8">
      <Section x={0} y={-100}>
        <Description />
      </Section>
      <h1 className="text-center w-10/12    mx-auto mb-3 text-md lg:mx-auto text-text   font-normal lg:text-xl   mt-2 lg:w-1/2">
        Welcome to <span className="text-primary  font-semibold">TrueDark</span>, where we
        craft innovative web development, stunning designs, and creative art
        solutions to elevate your brand.
      </h1>

      <h1 className="text-center text-secondary    font-semibold text-3xl pb-10 pt-2">  
         <ShinyText text="Interactive UI" disabled={false} speed={2} className='text-4xl    mb-3 uppercase  font-clash-display   font-bold' />
     </h1>

      {/* Cards Section */}
      <section
        ref={sectionRef}
        className="flex justify-center items-center mx-3 gap-4 md:flex-row xl:mx-80 mb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          <SectionCard title="" content={<Programmer text="programmer" />} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          <SectionCard
            title="designer"
            content={<Rive stateMachine={'State Machine 1'} artboard={'designer'} height={'100%'} />}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        >
          <SectionCard
            title="animator"
            content={<Rive stateMachine={'State Machine 1'} artboard={'animator'} height={'100%'} />}
          />
        </motion.div>
      </section>

 
    </div>
  );
};

export default Content;
