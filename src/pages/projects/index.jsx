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
const Index = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="  min-h-screen  overflow-auto  mt-20 sm:mt-40"  
  > 
    <h1 className="text-4xl  ml-10 font-bold">Discover
    </h1>



    <ProjectSection
            digitalIllustration={digitalIllustrationProjects}
            images2={images2}
            Logos={Logos}
            Website={Website}
            games={games}
            Animation={Animation}
          />
  </motion.div>
  );
};

export default Index;
