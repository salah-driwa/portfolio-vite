
import Content from './component/Content.jsx';
//import Dragon from './component/rive/Dragons.js';
import Navbar from './component/Navbar.jsx';
import Herosection from './component/Herosection.jsx';


function Home() {

    return (

    <div className="overflow-x-hidden "> 
    <Navbar/>
   
     <header className="relative  overflow-hidden   sm:-top-3 -top-6 sm:block hidden" id='home' >
   {//  <Dragon />
  } 
  
  
  
  <Herosection></Herosection>
  
  
  
  
  
  
  
  
  
   </header>
    

      <body className=' w-full xl:top-full'>
             <Content />
      </body>

     </div>    
    
    );
  
  }
  
  export default Home;
