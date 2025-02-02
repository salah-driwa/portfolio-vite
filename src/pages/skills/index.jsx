import Footer from '../../component/Footer';
import MobileSkillSection from '../../component/mobile/MobileSkillSection';
import SkillSection from '../../component/SkillSection/SkillSection';





function index() {
  return (
    <div>
        


        <section className=' lg:w-11/12 mx-auto mt-28  sm:block hidden   my-10'>
        <SkillSection/>
      </section>
      <div className=' sm:hidden block '
      >
        <MobileSkillSection/>
        
      </div>
      <Footer />
    </div>
  )
}

export default index