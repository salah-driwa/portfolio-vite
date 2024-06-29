import { useRive } from '@rive-app/react-canvas';
import an from './riveassets.riv';

export default function Upbutton() {
  const { RiveComponent } = useRive({
    src: an,
    stateMachines: 'State Machine 1',
    autoplay: true,
    artboard: 'upbutton',
  });

  
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '6%',
        zIndex: '30',
        height: '80px',
        width: '60px',
        cursor: 'pointer',
      }}
      onClick={handleClick}
      onTouchStart={handleClick}
    >
      <RiveComponent stateMachine={'State Machine 1'} artboard={'upbutton'} width={'100px'} />
    </div>
  );
}
