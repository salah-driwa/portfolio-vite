import SectionCard from "../../component/IntroductionSection/SectionCard";
import Rive from "../../component/rive/Rive";
import Programmer from "../../component/IntroductionSection/Programmer";
import Section from "../../component/Section_animation";
import Description from "../../component/IntroductionSection/Descrption";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Footer from "../../component/Footer";

function Index() {
  const sectionRef = useRef(null);

  // Track visibility of the parent section (containing all the cards)
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div className=" mt-36">
      <Section x={0} y={-100}>
        <Description />
      </Section>
      <h1 className="text-center w-10/12  font-small-display   mx-auto mb-3 text-md lg:mx-auto text-text   font-normal lg:text-xl   mt-2 lg:w-1/2">
        Welcome to <span className="text-primary  font-semibold">TrueDark</span>, where we
        craft innovative web development, stunning designs, and creative art
        solutions to elevate your brand.
      </h1>

      <h1 className="text-center font-clash-display text-secondary  text-3xl uppercase pb-10 pt-5">
        Click to Interact
      </h1>

      {/* Cards Section */}
      <section
        ref={sectionRef}
        className="flex justify-center  mb-10 items-center mx-3 gap-4 md:flex-row  "
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
            content={<Rive stateMachine={"State Machine 1"} artboard={"designer"} height={"100%"} />}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        >
          <SectionCard
            title="animator"
            content={<Rive stateMachine={"State Machine 1"} artboard={"animator"} height={"100%"} />}
          />
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}

export default Index;
