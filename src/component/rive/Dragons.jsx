import  { useEffect, useState } from "react";
import { useRive } from "@rive-app/react-canvas";
import an from "./dragon.riv";

export default function Dragon() {
  const [height, setHeight] = useState(window.innerWidth * 0.5);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerWidth * 0.5);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { RiveComponent } = useRive({
    src: an,
    stateMachines: "State Machine 1",
    autoplay: true,
    artboard: "New Artboard"
  });

  return <RiveComponent style={{ height: `${height+63}px`, width: "100%" }} />;
}
