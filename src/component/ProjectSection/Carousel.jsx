/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import VideoImageCard from "./VideoImageCard";

const Carousel = ({ datas }) => {
  const cardAnimation = {
    hidden: { opacity: 0, y: 20 },  // Start hidden, with a slight downward offset
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3, // Each card will appear 0.3 seconds after the previous one
        duration: 0.6,  // Animation duration for each card
        ease: "easeOut", // Smooth easing
      },
    }),
  };

  return (
    <section className="bg-lightbg sm:p-3   pt-5 rounded-xl flex justify-center flex-col items-center">
      <div className="flex justify-center items-center align-middle mx-auto">
        <div className="flex flex-wrap   gap-10 sm:gap-6 sm:items-start justify-center items-center align-middle w-full max-w-10xl mx-auto">
          {datas.map((data, index) => (
            <motion.div
              key={index}
              custom={index}  // Pass index to the custom animation prop
              initial="hidden"
              animate="visible"
              variants={cardAnimation}
            >
              <VideoImageCard
                videoUrl={data.url}
                imageUrl={data.img}
                link={data.link}
                title={data.title}
                description={data.description}
                icon={data.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
