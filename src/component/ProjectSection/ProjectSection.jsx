import React, { useState } from 'react';

import Carousel from './Carousel';
import { MdDraw, MdWeb } from 'react-icons/md';
import { FaGamepad, FaPaintBrush } from 'react-icons/fa';
import {LuPenTool} from  'react-icons/lu';
import {BiSolidCube} from  'react-icons/bi';

import { motion } from 'framer-motion';

function ProjectSection({ digitalIllustration, images2, Logos, Website, games,Animation }) {
  const [activeTab, setActiveTab] = useState('Website'); // Initial active tab
  const [slide, setSlide] = useState(0);  // Default left position

 // Import the `useMediaQuery` hook from your chosen library


// Define a function to handle tab selection
const handleTabChange = (tabName) => {
  setActiveTab(tabName);

  // Check if it's mobile view (e.g., screen width <= 768px)
  let slidewith;

if (window.innerWidth <= 768) {
  // Condition when window width is less than or equal to 768
  slidewith = 48; // Set a custom value
} else if (window.innerWidth <= 1024) {
  // Condition when window width is greater than 768
  slidewith = 120; // Set another custom value
}
else  {
  // Condition when window width is greater than 768
  slidewith = 120; // Set another custom value

}


  switch (tabName) {
    case 'Website':
      setSlide(0);
      break;
    case 'Games':
      setSlide(slidewith); // 48 pixels for mobile, 200 for non-mobile
      break;
    case 'Illustration':
      setSlide(slidewith*2 ); // 96 pixels for mobile, 400 for non-mobile
      break;
    case 'Splashart':
      setSlide(slidewith*3 ); // 144 pixels for mobile, 600 for non-mobile
      break;
    case 'Logos':
      setSlide(slidewith*4 ); // 192 pixels for mobile, 800 for non-mobile
      break;
    case 'Animation':
      setSlide(slidewith *5); // 240 pixels for mobile, 1000 for non-mobile
      break;
    // Add more cases for other tabs if needed
    default:
      setSlide(0); // Default position
  }
};

  return (
    <div>
     <div className="  flex  justify-start my-12  h-12  mx-3
       rounded-3xl relative z-0 overflow-hidden bg-[#002647] shadow-md text-white">
     <motion.div 
  initial={{ x: 0 }}
  animate={{ x: slide }}
  transition={{ 
    x: { duration: 0.5 },
    stiffness: 200,
    damping: 20,
  }}
  className=' w-12 lg:w-[120px] rounded-3xl h-12 p-0.5 left-0 top-0 absolute z-10'
>

<motion.div 
  initial={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.0)' }}
  animate={{
    background: [
      'linear-gradient(to bottom, #36d5e7, #1D4C75)',
      'linear-gradient(to bottom, #1D4C75, #36d5e7)',
      'linear-gradient(to bottom, #36d5e7, #1D4C75)',
    ],   boxShadow: [
     
      '0px 0px 0px 0px rgba(0, 0, 0, 0.0)', // Replace with your desired boxShadow when not active
      '10px 27px 99px -8px rgba(0, 255, 239, 0.90)',
      '10px 27px 120px -16px rgba(0, 255, 239, 0.0)',
    ],
  }}
  transition={{ 
    repeat: Infinity ,
    duration:6 // Infinite loop
  }}
 
  className='w-12  lg:w-[120px] rounded-3xl h-12 p-0.5 left-0 top-0 absolute z-10'
> 
  <div className='rounded-3xl h-full w-full bg-[#0f172a] '></div>
  </motion.div>
</motion.div>


<button
   className={`px-4 py-2 rounded-3xl z-20 w-12 lg:w-[120px] ${
    activeTab === 'Website' ? ' text-primary' : ''
  }`}
  onClick={() => handleTabChange('Website') }
>
<span className=' flex justify-center   '>  <span className='lg:pr-1 2xl:pr-2'><MdWeb size={30}/></span> <span className=' hidden lg:block my-auto'>Website</span></span>  
</button>

<button
  className={`px-4 py-2 rounded-3xl z-20 w-12  lg:w-[120px]  ${
    activeTab === 'Games' ? ' text-primary' : ''
  }`}
   onClick={() => handleTabChange('Games')}
>
  <span className=' flex justify-center'>  <span className='2xl:pr-3'><FaGamepad size={30}/></span>  <span className='hidden lg:block my-auto'>Games</span></span>  
</button>
<button
  className={`px-4 py-2 rounded-3xl z-20 w-12  lg:w-[120px]  ${
    activeTab === 'Illustration' ? ' text-primary' : ''
  }`}
  onClick={() => handleTabChange('Illustration')}
>
  <span className=' flex justify-center'>  <span className='2xl:pr-3'><MdDraw size={30}/></span> <span className=' hidden lg:block my-auto'>Illustration</span></span>
</button>
<button
  className={`px-4 py-2 rounded-3xl z-20 w-12  lg:w-[120px]  ${
    activeTab === 'Splashart' ? ' text-primary' : ''
  }`}
  onClick={() => handleTabChange('Splashart')}
>
 <span className=' flex justify-center'>  <span className='pr-1 2xl:pr-3'><FaPaintBrush size={30}/></span>   <span className='hidden lg:block my-auto'>Splashart</span> </span>
</button>
<button
  className={`xl:px-4  py-2 rounded-3xl z-20 w-12  lg:w-[120px]  ${
    activeTab === 'Logos' ? ' text-primary' : ''
  }`}
  onClick={() => handleTabChange('Logos')}
>
  <span className=' flex justify-center'>  <span className='2xl:pr-3 pr-1'><LuPenTool size={30}/></span>  <span className='hidden lg:block my-auto text-sm xl:text-base'>Designs</span>   </span>
</button>

<button
  className={`px-4 py-2 rounded-3xl z-20 w-12 lg:w-[100px]  ${
    activeTab === 'Animation' ? ' text-primary' : ''
  }`}
  onClick={() => handleTabChange('Animation')}
>
  <span className=' flex justify-center'>  <span className='2xl:pr-3 pr-1'><BiSolidCube size={30}/></span>  <span className=' hidden lg:block my-auto text-sm xl:text-base'>3D</span>   </span>
</button>

  
</div>


      {activeTab === 'Website' && <Carousel datas={Website} text="Website" />}
      {activeTab === 'Games' && <Carousel datas={games} text="Games" />}
      {activeTab === 'Illustration' && <Carousel datas={digitalIllustration} text="Illustration" />}
      {activeTab === 'Splashart' && <Carousel datas={images2} text="Splashart" />}
      {activeTab === 'Logos' && <Carousel datas={Logos} text="Logos" />}
      {activeTab === 'Animation' && <Carousel datas={Animation} text="Animation" />}
    </div>
  );
}

export default ProjectSection;
