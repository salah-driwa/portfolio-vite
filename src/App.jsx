import Home from './Home.jsx';
import Upbutton from './component/rive/Upbutton.jsx';

function App() {


 
  return (

      <div>
   
        <div className=" bg-background text-text min-h-screen relative overflow-hidden w-full flex items-center justify-center">
         
          <Home />
          <div className="hidden sm:block">
            <Upbutton />
          </div>
          <div className="blob absolute z-0 blob-left top-2"></div>
          <div className="blob absolute z-0 blob-right top-[600px]"></div>
          <div className="blob absolute z-0 blob-left top-[1600px]"></div>
          <div className="blob absolute top-[2600px] z-0 blob-right"></div>
          <div className="blob absolute z-0 blob-left top-[3600px]"></div>
          <div className="blob absolute top-[4600px] z-0 blob-right"></div>
        </div>
      </div>
  
  );
}

export default App;
