
import Content from './component/Content.jsx';
import Footer from './component/Footer.jsx';
//import Dragon from './component/rive/Dragons.js';

import Herosection from './component/Herosection.jsx';
import MobileHeroSection from './component/mobile/MobileHeroSection.jsx';


function Home() {

    return (

    <div className="overflow-x-hidden  "> 
   
   
     <header className="relative  overflow-hidden   sm:-top-3 -top-6 sm:block hidden" id='home' >
   {//  <Dragon />
  } 


  
  <Herosection></Herosection>
  

   </header>
   <div className='  sm:hidden block'>
   <MobileHeroSection />
    
   </div>
   
             <Content />
  
             <Footer />
     </div>    
    
    );
  
  }
  
  export default Home;
