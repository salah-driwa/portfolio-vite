
import Upbutton from './component/rive/Upbutton.jsx';
import routes from 'virtual:generated-pages-react';
import { useRoutes } from 'react-router-dom';
import MobileNavigation from './component/mobile/MobileNavigation.jsx';
import { Suspense } from 'react';
import Navbar from './component/Navbar.jsx';



const App = () => {

  const routing = useRoutes(routes);
 
  return (

      <div className=' min-h-screen '>
         <Navbar />
       <Suspense fallback={<div>Loading...</div>}>
        <div className=" bg-background text-text min-h-screen relative overflow-hidden w-full flex items-center justify-center">
        <div className="blob    z-0 sm:block  hidden absolute blob-left top-2"></div>
          <div className="blob  z-0 sm:block  hidden absolute blob-right top-[600px]"></div>
          <div className="blob  z-0 sm:block  hidden absolute blob-left top-[1600px]"></div>
          <div className="blob  z-0 sm:block  hidden absolute top-[2600px]  blob-right"></div>
          <div className="blob  z-0 sm:block  hidden absolute blob-left top-[3600px]"></div>
          <div className="blob  z-0 sm:block  hidden absolute top-[4600px]  blob-right"></div>
          <div className=' z-20'>
          {routing}
       
          </div>
          <div className="hidden z-20 sm:block">
            <Upbutton />
          </div>
   
        </div>
        </Suspense>
    <div className=' sm:hidden block'> <MobileNavigation/></div>
      </div>
  
  );
}

export default App;
