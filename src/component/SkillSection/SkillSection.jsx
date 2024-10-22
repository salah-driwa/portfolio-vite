
import Section from '../Section_animation';
import Rive from '../rive/Rive';

const SkillSection = () => {
  
    return ( 
    <Section>
        <div className='xl:mx-80 lg:mx-20  mx-7' id='skills'> 
            <h1 className='text-primary    font-bold 
             text-2xl   sm:text-4xl   sm:m-11   text-center
              '>Skills And Framework ..</h1>

                
                <Section delay={0.1} x={20} duration={0.3} >
                    <div className='flex sm:flex-row  flex-col  justify-evenly '>
                        <div className='  w-full'>
                            <h1 className=" text-left text-secondary font-bold  text-3xl  sm:pt-10">Adobe Suite</h1>
                            <p  className=' text-left text-secondary font-normal  text-base leading-relaxed   pt-4  sm:text-xl'>I am highly proficient in using the Adobe Creative Suite, including popular software such as Illustrator, Photoshop, and InDesign.</p>
                        </div>    
                   <Rive  stateMachine={'State Machine 1'} artboard={'adobe'} height={'300px'} width={''} />
                   </div>
                 </Section>

                 <Section delay={0.2} x={200} duration={0.9}>
                 <div className='flex  sm:flex-row  flex-col  justify-evenly '>
                    <div className='sm:hidden block'>
                 <h1 className=" text-left text-secondary font-bold  text-3xl uppercase sm:pt-10 ">frontend</h1>
                <p  className=' text-left text-secondary font-normal  text-base leading-relaxed    p-3  sm:text-xl'>I enjoy working with front-end technologies, especially React, Next.js,framer motion Tailwind CSS, and Bootstrap.</p>
                </div>
                 <Rive  stateMachine={'State Machine 1'} artboard={'frontend'} height={'300px'} />
                 <div className='hidden sm:block'>
                            <h1 className=" text-left text-secondary font-bold - text-3xl uppercase sm:pt-10 ">frontend</h1>
                            <p  className=' text-left text-secondary font-normal - text-base leading-relaxed    pt-3  sm:text-xl'>I enjoy working with front-end technologies, especially React, Next.js,framer motion Tailwind CSS, and Bootstrap.</p>
                        </div>  
                    
                    </div>
                 </Section>

                 <Section delay={0.2} x={-120} duration={0.3}> 
                 <div className='flex sm:flex-row  flex-col   justify-evenly  mt-12'>
                 <div className=''>
                            <h1 className=" text-left text-secondary font-bold  text-3xl uppercase sm:pt-10">backend</h1>
                            <p  className=' text-left text-secondary font-normal  text-base leading-relaxed    pt-3  sm:text-xl'>  
                             I have experience in backend development using technologies such
                              as MongoDB, PHP, MySQL, and API integrations such as sanity
                            </p>
                        </div>  
                     <Rive  stateMachine={'State Machine 1'} artboard={'backend'} height={'300px'} />
                     </div>
                 </Section>

        </div> 
    </Section>
    );
}
 
export default SkillSection;