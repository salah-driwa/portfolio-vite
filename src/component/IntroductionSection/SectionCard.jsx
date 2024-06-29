/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';

const SectionCard = ({ title, content }) => {
  return (
    <motion.div
      className='rounded-xl p-0.5 h-[300px] w-[260px] lg:h-[290px]  lg:w-[260] xl:h-[380px] xl:w-[350px] m-auto'
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
      <div className="h-full w-full bg-lightbg rounded-xl">
      {title && ( // Check if title is not empty
        <h1 className="text-center text-secondary font-bold font-mono text-3xl uppercase pt-10">
          {title}
        </h1>
      )}
        <div className="pt-3">{content}</div>
      </div>
    </motion.div>
  );
};

export default SectionCard;
