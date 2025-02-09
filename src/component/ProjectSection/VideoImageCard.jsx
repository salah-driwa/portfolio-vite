/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player"; 
import { motion } from "framer-motion";

const VideoImageCard = ({ videoUrl, imageUrl, link, title, description, icon }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [isVideoLoading, setIsVideoLoading] = useState(true);  // State for video loading

  const handleProgress = (state) => setCurrentTime(state.playedSeconds);
  const handleDuration = (duration) => setDuration(duration);

  const progressPercentage = (currentTime / duration) * 100 || 0;

  const prevImage = (event) => {
    event.stopPropagation(); 
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrl.length - 1 : prevIndex - 1
    );
  };

  const nextImage = (event) => {
    event.stopPropagation(); 
    setImageIndex((prevIndex) =>
      prevIndex === imageUrl.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectImage = (index, event) => {
    event.stopPropagation();
    setImageIndex(index);
  };

    // Preload images
    useEffect(() => {
      if (Array.isArray(imageUrl)) {
        imageUrl.forEach((src) => {
          const img = new Image();
          img.src = src; // Preload image
        });
      }
    }, [imageUrl]);
  // Handle video loading state
  const handleVideoReady = () => {
    setIsVideoLoading(false);  // Video is ready, hide the spinner
  };

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="relative mx-auto">
        <a href={link} target="_blank" rel="noreferrer" className="block min-w-80">
          <div
            className={`p-5 bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-10 dark:hover:bg-opacity-20 hover:bg-opacity-30 rounded-xl relative w-[350px] mx-auto sm:mx-0 h-56 sm:w-[380px] sm:h-64 overflow-hidden transition-all duration-300 ease-in-out ${isHovered ? "hover:bg-opacity-50" : ""}`}
          >
            {isHovered && videoUrl ? (
              <div className="absolute top-1 right-2 z-50 p-1">
                <svg className="w-8 h-8" viewBox="0 0 36 36">
                  <circle
                    className="text-gray-300"
                    strokeWidth="8"
                    fill="none"
                    r="14"
                    cx="18"
                    cy="18"
                  />
                  <circle
                    className="text-blue-500"
                    strokeWidth="8"
                    fill="none"
                    r="14"
                    cx="18"
                    cy="18"
                    strokeDasharray="88"
                    strokeDashoffset={88 - (88 * progressPercentage) / 100}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
                  />
                </svg>
              </div>
            ) : (
              videoUrl && (
                <div className="absolute top-2 right-3 z-50">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-500">
                  <FaPlay size={16} className="text-white ml-0.5"  />
                </div>
              </div>
              )
            )}

            {videoUrl && isHovered ? (
              <div className="relative h-full rounded-xl overflow-hidden">
                {/* ReactPlayer with onReady to handle the video loading state */}
                <ReactPlayer
                  url={videoUrl}
                  playing={isHovered}
                  muted
                  loop
                  width="100%"
                  height="102%"
                  onProgress={handleProgress}
                  onDuration={handleDuration}
                  onReady={handleVideoReady}  // Set video as ready
                  className="rounded-xl scale-125 object-contain absolute top-0 left-0"
                />
                {/* Show spinner when video is loading */}
                {isVideoLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl">
                    <div className="animate-spin rounded-full border-t-2 border-blue-500 w-12 h-12"></div>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full">
               {Array.isArray(imageUrl) && imageUrl.length > 1 ? (
        <>
          <div className="relative w-full h-full">
            <motion.img
              key={imageIndex}
              src={imageUrl[imageIndex]}
              alt={`Image ${imageIndex + 1}`}
              className="w-full h-full object-cover rounded-lg"
              width="350"
              height="200"
              loading="lazy"
              initial={{ opacity: 0, x: 10 }} // Start with invisible image
              animate={{ opacity: 1, x: 0 }}   // Fade in effect
              exit={{ opacity: 0 }}            // Fade out effect when exiting
              transition={{ opacity: { duration: 1 } }} // Set fade duration
              onLoad={(e) => e.target.classList.add("loaded")}
            />
          {imageIndex === 0 && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse rounded-lg img-skeleton"></div>
      )}
          </div>

          {isHovered && (
            <div className="absolute bottom-6 left-1/2 z-50 transform -translate-x-1/2 flex space-x-2">
              {imageUrl.map((_, index) => (
                <button
                  key={index}
                  onClick={(event) => selectImage(index, event)}
                  className={`w-2 h-2 rounded-full ${
                    index === imageIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="relative w-full h-full">
          <img
            src={imageUrl}
            alt={`Image ${imageIndex + 1}`}
            className="w-full h-full object-cover rounded-lg"
            width="350"
            height="200"
            loading="lazy"
            onLoad={(e) => e.target.classList.add("loaded")}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse rounded-lg img-skeleton"></div>
        </div>
      )}
              </div>
            )}
          </div>
        </a>

                                {Array.isArray(imageUrl) && imageUrl.length > 1 && isHovered ? (
                          <div className="h-full">
                            {/* Show 'previous' button only if there is a previous image */}
                            {imageIndex > 0 && (
                              <button
                                onClick={prevImage}
                                className="absolute left-12 top-36 transform -translate-y-1/2 bg-gray-600 p-2 rounded-full"
                              >
                                <FaArrowLeft className="text-white" />
                              </button>
                            )}

                            {/* Show 'next' button only if there is a next image */}
                            {imageIndex < imageUrl.length - 1 && (
                              <button
                                onClick={nextImage}
                                className="absolute right-12 top-36 transform -translate-y-1/2 bg-gray-600 p-2 rounded-full"
                              >
                                <FaArrowRight className="text-white" />
                              </button>
                            )}
                          </div>
                        ) : (
                          <></>
                        )}

      </div>
      <div className="flex h-20 gap-4 sm:justify-start sm:items-start sm:align-top w-10/12 mx-auto justify-center align-middle items-center max-w-96 sm:mt-3">
        <img src={icon} alt="" className="size-12 object-contain my-auto bg-white rounded-2xl" />
        <div className="flex flex-col items-start justify-start align-top relative w-9/12">
          {/* Title */}
          <h1 className="text-left text-primary font-medium text-nowrap  font-clash-display text-lg mt-2 truncate w-full overflow-hidden" style={{ whiteSpace: "nowrap" }}>
            {title}
          </h1>

          {/* Description */}
          <h1 className="text-left text-text max-w-full  font-small-display font-thin text-sm opacity-70 mt-2 truncate w-full overflow-hidden" style={{ whiteSpace: "nowrap" }}>
            {description}
          </h1>

          {/* Popup */}
          {isHovered && (
            <div className="absolute left-0 font-small-display top-full mt-2 bg-black/80 text-white p-3 rounded-lg shadow-lg z-[200] w-72">
              <p className="text-sm font-mono font-thin">{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoImageCard;
