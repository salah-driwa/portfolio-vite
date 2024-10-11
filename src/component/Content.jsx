import { useEffect} from "react";
import Programmer from './IntroductionSection/Programmer';
import Description from './IntroductionSection/Descrption';
import SkillSection from './SkillSection/SkillSection';
import Footer from './Footer';
import Section from './Section_animation';


// import Data
import digitalIllustration from "../asets/Projects/digital  Illustration/digitalIllustrationProjects";
import images2 from '../asets/Projects/Digital Painting/Splashart_images';
import Logos from '../asets/Projects/Graphic Design/GraphicDesignProjects';
import Rive from './rive/Rive';
import Website from '../asets/Projects/DevelopmentProject/DevelopmentProject';
import games from '../asets/Projects/games/games';
import ProjectSection from './ProjectSection/ProjectSection';
import Animation from '../asets/Projects/Animation 3D/AnimationAnd3D';
import SectionCard from './IntroductionSection/SectionCard';
  
const Content = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
   
    return (  
//this is the mid section
      <body className='mt-8'>

        <Section  x={0} y={-100}> 
           <Description/>
        </Section>  
        <h1 className='text-center text-secondary font-bold font-mono text-3xl uppercase pb-10'> Click to Interact</h1>
      <section className='flex  justify-center items-center mx-3 gap-4 md:flex-row xl:mx-80 mb-5'>
        
      <SectionCard title="" content={<Programmer text="programmer " />} />
      <SectionCard title="designer" content={<Rive  stateMachine={'State Machine 1'} artboard={'designer'} height={'100%'} />} />
      <SectionCard title="animator" content={ <Rive  stateMachine={'State Machine 1'} artboard={'animator'} height={'100%'} />} />
    </section>
  
      <section className=' lg:my-60  my-10'>
        <SkillSection/>
      </section>

    <section className='block   m-auto  lg:w-11/12  xl:w-10/12 ' id='project'>
        <Section x={60} y={0}>
          <h1 className="text-white  opacity-80 font-mono  font-bold  text-2xl  text-center   sm:text-xl   sm:text-left  ">My Work</h1>
          <h1 className="text-primary  font-mono  font-extrabold  text-center  text-2xl pt-2   sm:text-6xl   sm:text-left  ">Projects.</h1>
          </Section> 
          <ProjectSection
            digitalIllustration={digitalIllustration}
            images2={images2}
            Logos={Logos}
            Website={Website}
            games={games}
            Animation={Animation}
          />
            
    </section>


          <Footer />
       
      
    </body>
    );
}

export default Content;