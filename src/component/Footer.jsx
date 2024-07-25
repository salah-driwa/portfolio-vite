/* eslint-disable react/jsx-key */

import Social from "../asets/social/Social";
import { motion } from "framer-motion";
import  Button  from "./rive/Button";
import Section from "./Section_animation";

const Footer = () => {
    return ( 
        <footer className="  relative bg-lightbg " >     
          <div className="mx-auto border-b-2 border-gray-500 w-1/2 sm:mt-36 mt-5 pt-5 h-1"></div>
          
         
              <div className="sm:relative ">
                <div className="hidden sm:block pt-10">

                </div>
               
                
               <h1 className="font-mono text-primary  font-bold  text-2xl
                pt-2  sm:text-3xl   
                m-auto text-center ">Social and Contact</h1>
                
                 <Button/>
               
              
              
             
            
              <div className="flex  sm:gap-6  pb-12 sm:mt-0 gap-5 mt-2  w-72 mx-auto   "> 
             
        {Social.map((Social, index) => {
            return (
             <Section x={-100} delay={index*0.2}>
                <motion.div whileHover={{scale:1.1 }}
                       key={index}
                       className="sm:h-10 sm:w-full   h-10  ">
                <a href={Social.url}>
                  <img src={Social.img} alt="" className="  rounded-3xl"/>
                
                  </a>
                </motion.div>
                </Section>
               
                );
           
             }) }
              </div>
           </div>
      </footer>
  
     );
}
 
export default Footer;