/* eslint-disable react/prop-types */
import { useRive } from "@rive-app/react-canvas";
import an from "./riveassets.riv";

export default function Rive({ stateMachine, artboard, height, width }) {
  const { RiveComponent } = useRive({
    src: an,
    stateMachines: stateMachine,
    autoplay: true,
    artboard: artboard,
  });

  return (
    <div style={{ height: height, width: width ? width : "100%" }}>
      <RiveComponent style={{ height: "100%" }} />
    </div>
  );
}
