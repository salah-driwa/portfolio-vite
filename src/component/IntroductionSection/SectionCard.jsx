/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';

const SectionCard = ({ title, content }) => {
  return (
    <motion.div
      className='rounded-xl p-0.5 h-28 w-28 xl:h-[300px] xl:w-[260px]  '
      initial={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))' }}
      whileHover={{
        background: [
          'linear-gradient(to bottom, #36d5e7, #1D4C75)',
          'linear-gradient(to bottom, #1D4C75, #36d5e7)',
          'linear-gradient(to bottom, #36d5e7, #1D4C75)',
        ],
        transition: { duration: 3 },
      }}
    >
      <div className="h-full w-full bg-accent rounded-xl">
      {title && ( // Check if title is not empty
        <h1 className=" text-center text-text 
         font-bold font-mono text-sm xl:text-3xl pt-3 uppercase xl:pt-10">
          {title}
        </h1>
      )}
        <div className="pt-3   h-24 lg:h-64 ">{content}</div>
      </div>
    </motion.div>
  );
};

export default SectionCard;
