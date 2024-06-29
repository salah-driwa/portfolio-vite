import { useRive } from "@rive-app/react-canvas";
import an from "./button.riv"

export default function Button() {
 
  const {  RiveComponent } = useRive({
    src: an,
    stateMachines: "State Machine 1",
    autoplay: true,
    artboard:"New Artboard"

 });


  return (
    <div className="h-full">
     <RiveComponent 
    style={{ height: "100%"  ,position :"relative" }}
  
   
  />
   </div>
  );
}