import { useEffect} from "react";
import Programmer from './IntroductionSection/Programmer';
import Description from './IntroductionSection/Descrption';
import SkillSection from './SkillSection/SkillSection';
import Footer from './Footer';
import Section from './Section_animation';
import Rive from './rive/Rive';
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
        <h1 className='text-center text-sm lg:mx-auto text-text font-bold font-mono lg:text-xl uppercase mx-2 lg:w-1/2'>
  Welcome to <span className="text-primary">TrueDark</span>, where we craft innovative web development, stunning designs, and creative art solutions to elevate your brand.
</h1>

        <h1 className='text-center text-secondary font-bold font-mono text-3xl uppercase pb-10 pt-2'> Click to Interact</h1>
      <section className='flex  justify-center items-center mx-3 gap-4 md:flex-row xl:mx-80 mb-5'>
        
      <SectionCard title="" content={<Programmer text="programmer " />} />
      <SectionCard title="designer" content={<Rive  stateMachine={'State Machine 1'} artboard={'designer'} height={'100%'} />} />
      <SectionCard title="animator" content={ <Rive  stateMachine={'State Machine 1'} artboard={'animator'} height={'100%'} />} />
    </section>
  
      <section className=' lg:my-60  my-10'>
        <SkillSection/>
      </section>

  


          <Footer />
       
      
    </body>
    );
}

export default Content;