
import Button from "../rive/Character";
import {motion} from 'framer-motion'
const Description = () => {
  //  const { language } = useLanguage();
  
    return (
      <div className="mx-10 xl:mb-10 lg:mb-16 xl:mx-80 mt-32 flex sm:flex-row justify-start" id="about">
       
        <motion.div
       animate={  {
        scale:  1,
        x: [0, 10, -5, 10, 0],
        y: [0, -5, -20, -5, 0],
        transition: { 
          x: { repeat: Infinity, duration: 8  },
          y: { repeat: Infinity, duration: 8, repeatType: "loop"  }
        }
      }}
      transition={{ duration: 0.5 }} className=" mx-auto xl:h-96   xl:w-[390px]  size-40  rounded-full">
      
      <div className=" block sm:hidden h-64 w-full z-[100] absolute"></div>
          <div className=" bg-gray-300 dark:bg-white xl:h-96  xl:w-[390px] size-40   rounded-full ">
          <Button />
          </div>
        
     
        </motion.div>
 
      </div>
    );
  };
  
  export default Description;