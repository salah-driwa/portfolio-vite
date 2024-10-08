import Home from './Home.jsx';
import Upbutton from './component/rive/Upbutton.jsx';
//import { LanguageProvider } from './component/context/languagecontxt.jsx';

function App() {
  // const [isLoading, setIsLoading] = useState(true);

 
  return (

      <div>
        {/* {isLoading ? (
          <div className="loading-container bg-[#00213d] h-screen pt-36 sm:pt-60 overflow-hidden">
            <div className="h-[380px] sm:h-[500px] overflow-hidden">
              <Loading />
            </div>
          </div>
        ) : ( )} */}
        <div className="bg-background text-text min-h-screen relative overflow-hidden w-full flex items-center justify-center">
          <div className="blob absolute z-0 blob-left top-2"></div>
          <div className="blob absolute z-0 blob-right top-[600px]"></div>
          <div className="blob absolute z-0 blob-left top-[1600px]"></div>
          <div className="blob absolute top-[2600px] z-0 blob-right"></div>
          <div className="blob absolute z-0 blob-left top-[3600px]"></div>
          <div className="blob absolute top-[4600px] z-0 blob-right"></div>
          <Home />
          <div className="hidden sm:block">
            <Upbutton />
          </div>
        </div>
      </div>
  
  );
}

export default App;
