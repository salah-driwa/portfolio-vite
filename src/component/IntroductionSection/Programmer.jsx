/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import Rive from "../rive/Rive";
const Presentation = ({ text }) => {
  const [type, setType] = useState("");
  const [start, setStart] = useState(false);
  
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !start) {
        setStart(true);
        let i = 0;
        const interval = setInterval(() => {
          setType(text.slice(0, i));
          i++;
          if (i === text.length) {
            clearInterval(interval);
          }
        }, 100);
        return () => clearInterval(interval);
      }
      if (!entries[0].isIntersecting && start) {
        setStart(false);
        setType("");
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [start, text]);

  return (
    <div ref={ref} className='  '>
      <h1 className=" text-center text-secondary font-bold font-mono text-3xl uppercase pt-10 blinking-cursor ">{type}</h1>
      <Rive  stateMachine={'State Machine 1'} artboard={'programmer'} height={'200px'} />

    </div>
  );
};

export default Presentation;
