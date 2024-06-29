
import { useRive } from "@rive-app/react-canvas";
import an from "./Loading.riv"

function Loading() {
    const {  RiveComponent } = useRive({
        src: an,
        stateMachines: "State Machine 1",
        autoplay: true,
        artboard:"New Artboard"
    
     });
    
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "500px", // Center vertically within the viewport
      width: "100%",   // Full width
    }}
 
  >
    <RiveComponent style={{ height: '130%', width: "90%" }} />
  </div>
  )
}

export default Loading