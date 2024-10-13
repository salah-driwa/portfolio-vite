
import Content from './component/Content.jsx';
//import Dragon from './component/rive/Dragons.js';

import Herosection from './component/Herosection.jsx';


function Home() {

    return (

    <div className="overflow-x-hidden  "> 
   
   
     <header className="relative  overflow-hidden   sm:-top-3 -top-6 sm:block hidden" id='home' >
   {//  <Dragon />
  } 


  
  <Herosection></Herosection>
  

   </header>
    

   
             <Content />
  

     </div>    
    
    );
  
  }
  
  export default Home;
