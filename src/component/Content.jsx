import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Programmer from './IntroductionSection/Programmer';
import Description from './IntroductionSection/Descrption';
import Footer from './Footer';
import Section from './Section_animation';
import Rive from './rive/Rive';
import SectionCard from './IntroductionSection/SectionCard';

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
      <h1 className="text-center text-sm lg:mx-auto text-text font-bold lg:text-xl uppercase mx-2 lg:w-1/2">
        Welcome to <span className="text-primary">TrueDark</span>, where we craft innovative web development, stunning designs, and creative art solutions to elevate your brand.
      </h1>

      <h1 className="text-center text-secondary font-bold text-3xl pb-10 pt-2">Interactive UI</h1>

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

      <Footer />
    </div>
  );
};

export default Content;
