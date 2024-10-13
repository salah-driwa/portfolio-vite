/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import VideoImageCard from "./VideoImageCard";

const Carousel = ({ datas }) => {




  return (
    <section className=" bg-lightbg p-3 rounded-xl flex justify-center flex-col items-center">
      
      <div className="flex justify-center items-center  align-middle  mx-auto ">
  <div className="flex flex-wrap  gap-10 sm:gap-6 sm:items-start justify-center items-center  align-middle w-full max-w-10xl mx-auto">
    {datas.map((data, index) => (
      <VideoImageCard
        key={index}
        videoUrl={data.url}
        imageUrl={data.img}
        link={data.link}
        title={data.title}
        description={data.description}
        icon={data.icon}
      />
    ))}
  </div>
</div>

    </section>
  );
};

export default Carousel;
