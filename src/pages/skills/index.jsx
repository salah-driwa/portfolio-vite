import MobileSkillSection from '../../component/mobile/MobileSkillSection';
import SkillSection from '../../component/SkillSection/SkillSection';





function index() {
  return (
    <div>
        


        <section className=' lg:my-60  sm:block hidden   my-10'>
        <SkillSection/>
      </section>
      <div className=' sm:hidden block '
      >
        <MobileSkillSection/>
      </div>
    </div>
  )
}

export default index