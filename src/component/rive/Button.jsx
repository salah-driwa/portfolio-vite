import { useRive } from "@rive-app/react-canvas";
import an from "./button.riv";

export default function Character() {
  const { RiveComponent } = useRive({
    src: an,
    stateMachines: "State Machine 1",
    autoplay: true,
    artboard: 'kitty button',
  });

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
      <RiveComponent style={{ height: "120px", width: "200px" }} onClick={() => { window.location.href = "mailto:salah.driwa.job@gmail.com"; }} />
    </div>
  );
}
