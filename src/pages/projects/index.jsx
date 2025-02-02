// src/pages/index.jsx
//import React from 'react';
import { motion } from "framer-motion";
import ProjectSection from "../../component/ProjectSection/ProjectSection";
import digitalIllustrationProjects from "../../asets/Projects/digital  Illustration/digitalIllustrationProjects";
import Website from '../../asets/Projects/DevelopmentProject/DevelopmentProject';
import games from '../../asets/Projects/games/games';

import images2 from '../../asets/Projects/Digital Painting/Splashart_images';
import Logos from '../../asets/Projects/Graphic Design/GraphicDesignProjects';
import Animation from '../../asets/Projects/Animation 3D/AnimationAnd3D';
import SplitText from "../../component/SplitText";
import Footer from "../../component/Footer";
import ShinyText from "../../component/ShinyText";
const Index = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="  min-h-screen  w-11/12 md:w-10/12 mx-auto  mt-28 sm:mt-40"  
  > 
    <h1 className="">
    </h1>

    <ShinyText text="Discover My Work" disabled={false} speed={3} className='text-xl   mb-3 uppercase  font-clash-display   font-light' />
    <SplitText
  text=""
  className="text-xl text-left     text-text"
  delay={30}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
  

/>

<div className="   flex flex-col mb-5  items-start">
  <SplitText
  text="Creating innovative digital solutions."
  className="text-4xl text-left    font-clash-display    text-text"
  delay={30}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
  

/>

</div>
    <ProjectSection
            digitalIllustration={digitalIllustrationProjects}
            images2={images2}
            Logos={Logos}
            Website={Website}
            games={games}
            Animation={Animation}
          />
       <Footer />
  </motion.div>
  );
};

export default Index;
