import { motion } from 'framer-motion';
import { FiPenTool } from 'react-icons/fi';
import { FaGamepad, FaLaptopCode } from 'react-icons/fa';
import { SiRive } from 'react-icons/si';
import { MdDraw } from 'react-icons/md';

const options = [
  {
    icon: <FiPenTool size={30} />,
    text: 'Designs',
    bgColor: 'rgba(35, 130, 255, 0.7)', // Darker hover color
    link: 'https://truedark-portfolio.netlify.app/projects?tab=Design',
  },
  {
    icon: <FaLaptopCode size={30} />,
    text: 'Development',
    bgColor: 'rgba(255, 69, 145, 0.7)', // Darker hover color
    link: 'https://truedark-portfolio.netlify.app/projects?tab=Website',
  },
  {
    icon: <MdDraw size={30} />,
    text: 'Illustration',
    bgColor: 'rgba(50, 255, 210, 0.7)', // Darker hover color
    link: 'https://truedark-portfolio.netlify.app/projects?tab=Illustration',
  },
  {
    icon: <FaGamepad size={30} />,
    text: 'Games',
    bgColor: 'rgba(200, 90, 255, 0.7)', // Darker hover color
    link: 'https://truedark-portfolio.netlify.app/projects?tab=Games',
  },
  {
    icon: <SiRive size={30} />,
    text: 'Character',
    bgColor: 'rgba(255, 150, 75, 0.7)', // Darker hover color
    link: 'https://truedarkanimations.netlify.app/',
  },
];

const MobileHeroSection = () => {
  const handleClick = (link) => window.open(link, '_blank');

  return (
    <motion.div
      className="flex mt-36 flex-col items-center justify-center p-4 relative bg-gradient-to-br
        from-light-background via-light-secondary to-light-accent
        dark:from-dark-background dark:via-dark-secondary dark:to-dark-accent"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{
            x: [0, 10, 0, -10, 0],
            transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-light-primary rounded-full dark:bg-dark-primary" />
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-light-secondary rounded-full dark:bg-dark-secondary" />
        </motion.div>
      </motion.div>

      <h1 className="text-3xl font-clash-display font-bold mb-6 text-light-primary text-center dark:text-dark-primary">
        What Are You Looking For?
      </h1>

      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {options.map((option, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg 
              cursor-pointer transition-colors font-small-display duration-300"
            style={{ backgroundColor: option.bgColor }}
            onClick={() => handleClick(option.link)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            {option.icon}
            <span className="mt-2 font-semibold text-lg text-light-primary dark:text-dark-primary">
              {option.text}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileHeroSection;
