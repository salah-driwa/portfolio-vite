import {  FaReact, FaNodeJs } from 'react-icons/fa'; // Import icons
import { SiAdobe } from "react-icons/si";
import { motion } from 'framer-motion'; // For animations

const skills = [
  {
    name: 'Adobe Suite',
    description:
      'Proficient with Adobe Creative Suite, including Illustrator, Photoshop, and InDesign.',
    icon: <SiAdobe  size={40} className="text-primary" />,
  },
  {
    name: 'Frontend Development',
    description:
      'Enjoy working with React, Next.js, Framer Motion, and Tailwind CSS.',
    icon: <FaReact size={40} className="text-primary" />,
  },
  {
    name: 'Backend Development',
    description:
      'Experienced in MongoDB, PHP, MySQL, and API integrations like Sanity.',
    icon: <FaNodeJs  size={40} className="text-primary" />,
  },
];

const MobileSkillSection = () => {
  return (
    <div className="px-6 pt-20 pb-40" id="skills">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-primary font-bold text-2xl sm:text-4xl">
          Our Expertise
        </h1>
        <p className="text-secondary mt-2 text-base sm:text-lg">
          Discover the tools and frameworks that power our work.
        </p>
      </div>

      {/* Skill Cards */}
      <div className="grid gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white/10 rounded-xl shadow-md p-5 flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileTap={{ scale: 0.98 }} // Mobile-friendly tap effect
          >
            {skill.icon}
            <h2 className="text-secondary font-bold text-xl text-center">
              {skill.name}
            </h2>
            <p className="text-secondary text-center text-sm sm:text-base">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MobileSkillSection;
