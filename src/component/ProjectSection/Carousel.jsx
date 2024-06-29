/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Section from "../Section_animation";
import {BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill}  from 'react-icons/bs'
import Icons from '../../asets/icons/Icons'

const Carousel = ({ datas, text }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(-1);
  const [currentIndex, setCurrentIndex] = useState(0);

  // getting  Icons based on data
  function getIconsWithNames(simage, icons) {
    const iconsForSimage = simage.icons.map((iconId) => {
      const matchingIcon = icons.find((icon) => icon.id === iconId);
      return matchingIcon ? { name: matchingIcon.name, icon: matchingIcon.icon } : null;
    });
  
    return iconsForSimage.filter((icon) => icon !== null); // Remove any null values
  }
  

  const handleHover = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(-1);
  };

  const [viewportWidth, setViewportWidth] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleScroll() {
      const container = containerRef.current;
      const scrollPosition = container.scrollLeft;
      const middleIndex = Math.floor(scrollPosition / viewportWidth);
      setActiveIndex(middleIndex);
    }
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [viewportWidth]);
  
  const itemsToDisplay = viewportWidth < 1440 ? 2 : 3;
  const isMobile = window.innerWidth <= 768; 
 
  return (
    
      <section className="sm:mt-20  bg-lightbg p-3 rounded-xl  ">
       

         <div className=" flex"> 
         <h1 className="text-secondary font-mono font-bold text-xl sm:pt-2 sm:text-6xl sm:ml-10 text-left my-2">{text}</h1>
          
         <div className="   ml-auto mt-auto mr-10 sm:block hidden ">
                <motion.button 
                whileHover={{scale:1.1}}
                className=" px-6"
                onClick={() => setCurrentIndex(currentIndex - itemsToDisplay)}
                disabled={currentIndex === 0}
              > 
              <BsFillArrowLeftCircleFill  size={40} color="#00eeff"/>
               
              </motion.button>
              <motion.button 
                whileHover={{scale:1.1}}
                className=" px-6"
                onClick={() => setCurrentIndex(currentIndex + itemsToDisplay)}
                disabled={currentIndex + itemsToDisplay >= datas.length}
              >
               <BsFillArrowRightCircleFill  size={40} color="#00eeff"/>
              </motion.button>
              </div>

        </div>

        <div ref={containerRef} className=" md:m-10 md:gap-8  md:justify-start md:flex-row  sm:flex-row sm:m-10 flex gap-3 flex-row overflow-x-auto sm:overflow-visible  snap-mandatory snap-x  ">
        {datas
        .slice(isMobile ? 0 : currentIndex, isMobile ? datas.length : currentIndex + itemsToDisplay)
        .map((data, index) => {
        const isCurrentlyHovered = isHovered === index;
        const hasVideo = Boolean(data.url);
        const isMiddle = index === activeIndex;
        const iconsForSimage =getIconsWithNames(data, Icons);
        //gets the icons needed
        
            return ( 
              <Section  delay={index*0.2} x={ -20} >
            <motion.div
              className='  p-0.5 rounded-xl w-[300px] lg:w-[350px] 2xl:w-[400px] h-[400px] lg:h-[490px] sm:mx-auto sm:m-auto snap-center'
          initial={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))' ,scale:1 }}
          whileHover={{
            background: viewportWidth>=800 ?[
              'linear-gradient(to bottom, #36d5e7, #1D4C75)',
              'linear-gradient(to bottom, #1D4C75, #36d5e7)',
              'linear-gradient(to bottom, #36d5e7, #1D4C75)',
            ]:[],
         
          }}
          transition={{
            background: { duration: 3 }, // Set the duration for the background animation
             // Set the duration for the scale animation
          }}
       
         > 
              <motion.div
                
                whileHover={{ 
                  
                  boxShadow: '10px 27px 99px -16px rgba(0, 255, 239, 0.49)',
                  transition: { duration: 0.5 }
                }}
                
                key={index}
                className={`drop-shadow-xl rounded-xl h-full w-full overflow-hidden bg-slate-900 mx-auto`}
                onHoverStart={() => handleHover(index)}
                onHoverEnd={handleMouseLeave}
              >
              <div className="flex gap-3 absolute right-6 top-7">
  {iconsForSimage.map((icon, index) => (
    <div
      key={index}
      className="relative bg-slate-900 rounded-full p-2 border border-primary group"
     
    >
      <img
        src={icon.icon}
        alt={icon.name}
        className="h-5 w-5 rounded-full "
      />
      <div className="hidden group-hover:block text-white z-50 absolute bottem-0  right-3/4 border border-primary bg-slate-900 rounded-lg p-1 text-xs" >
        {icon.name}
      </div>
    </div>
  ))}
                  </div>


                <a href={data.link} target="_blank" rel="noreferrer">
                  {hasVideo && (isCurrentlyHovered || (isMiddle && isMobile))  ? (
            
                      <div className="w-full  p-5">
                      <video
                      
               
                        src={data.url}
                        muted
                        loop
                        autoPlay
                        className="w-full h-[160px] lg:h-[250px] rounded-lg   object-cover  overflow-hidden"
                      />
                      </div>
                 
                  ) : (            
                      <div className="w-full  p-5">
                      <motion.img        
                        src={data.img}
                        alt={data.img}
                        className=" w-full h-[160px] lg:h-[250px] rounded-xl  object-cover   "
                      />
                      </div>
                 
                  )}
                  
                    <h1
                      className=" text-left text-base pl-6 text-primary font-bold font-mono lg:text-2xl p-3"
                    >
                      {data.title}
                    </h1>

                  <motion.h1
                    animate={isCurrentlyHovered ? [{ opacity: 1 }] : { opacity: 0.6 }}
                      className=" text-left pl-6 text-sm text-white opacity-10 font-bold font-mono  lg:text-md pr-5">
                    {data.description}
                  </motion.h1>
                  {data.tags && data.tags.length > 0 && (
                      <div className="absolute bottom-0 left-3 right-0 p-3">
                        <h1
                         
                          className="text-left text-sm  text-white  font-bold font-mono lg:text-xl pr-5 opacity-90"
                        >
                          {data.tags.map((tag, index) => (
                            <span key={index} className="text-secondary">
                              {tag} {index < data.tags.length - 1 ? ' ' : ''}
                            </span>
                          ))}
                        </h1>
                      </div>
                        )}



              </a>
              </motion.div>
              </motion.div>
              </Section> );
          })}
        </div>
      </section>
 
  );
};

export default Carousel;
