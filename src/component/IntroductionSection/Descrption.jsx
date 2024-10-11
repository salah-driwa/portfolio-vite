
import Button from "../rive/Character";
import {motion} from 'framer-motion'
const Description = () => {
  //  const { language } = useLanguage();
  
    return (
      <div className="mx-10 xl:mb-32 lg:mb-16 xl:mx-80 mt-32 flex sm:flex-row justify-start" id="about">
       
        <motion.div
       animate={  {
        scale:  1,
        x: [0, 10, -10, 10, 0],
        y: [0, -30, 15, -30, 0],
        transition: { 
          x: { repeat: Infinity, duration: 8  },
          y: { repeat: Infinity, duration: 8, repeatType: "loop"  }
        }
      }}
      transition={{ duration: 0.5 }} className=" mx-auto xl:h-96   xl:w-[390px]   h-56   w-56 rounded-full">
          <div className=" bg-gray-300 dark:bg-white xl:h-96  xl:w-[390px] h-56   w-56  rounded-full absolute"></div>
            <div className=" w-full h-full pt-22">
          <Button />
          </div>
        </motion.div>
      </div>
    );
  };
  
  export default Description;