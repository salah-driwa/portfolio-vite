/* eslint-disable react/jsx-key */

import Social from "../asets/social/Social";
import { motion } from "framer-motion";
import  Button  from "./rive/Button";
import Section from "./Section_animation";
import { useState } from "react";
import SplitText from "./SplitText";
const Footer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className=" sm:mb-10 mb-36">
      <footer className="relative  md:w-8/12 w-10/12 mx-auto">
          <div className="   bg-accent bg-opacity-70  p-10 rounded-3xl mx-auto text-center">
          <h1 className=" flex-col flex text-5xl font-clash-display  my-2 font-[400]  text-text">
        
          <SplitText
  text=" Let's create your"
  className=" sm:text-5xl text-xl font-clash-display  my-2   text-text"
  delay={30}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
  

/>

      
<SplitText
  text=" next big idea."
  className=" sm:text-5xl text-xl font-clash-display  my-2   text-text"
  delay={70}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.5}
  rootMargin="-50px"
  

/>
          </h1>
           
          <Section y={-30} opacity={10} duration={1} x={0}  >   <div className="hidden sm:block">
                  <Button />
              </div>


              </Section>
              <div className=" sm:hidden text-text w-fit mx-auto p-3 rounded-lg block bg-primary" onClick={() => { window.location.href = "mailto:salah.driwa.job@gmail.com"; }} >
             Contact us
              </div>


          </div>
          
          <div className=" flex items-center my-5  justify-between">
          <div className="h-fit opacity-50  ">
                  <p className="text-text text-sm">&copy; {new Date().getFullYear()} True Dark. All rights reserved.</p>
              </div>

              <div className="flex sm:gap-2 justify-center items-center">
      {Social.map((social, index) => {
        const IconComponent = social.icon;
        const isHovered = index === hoveredIndex;

        return (
          <Section x={-100} delay={index * 0.2} key={index}>
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="h-6 w-6 m-2"
            animate={{ opacity: hoveredIndex !== null && !isHovered ? 0.7 : 1   }}
            transition={{ duration:0.1, bounce:"tween"}}
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-text"
            >
              <IconComponent size={24} />
            </a>
          </motion.div>
          </Section>
        );
      })}
    </div>


           

              </div>
      </footer>
      </div> );
};

export default Footer;

