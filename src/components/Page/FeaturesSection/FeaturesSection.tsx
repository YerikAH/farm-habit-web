import FeaturesSwitch from '../FeaturesSwitch/FeaturesSwitch'
import SectionWithDescription from '../shared/SectionWithDescription/SectionWithDescription'
import { TEXT, TITLE } from './features_section'
import s from './features_section.module.css'

const FeaturesSection = () => {
  return (
    <section className={s.section}>
      <div className={s.section_bg}>
        <SectionWithDescription title={TITLE} description={TEXT}/>
        <FeaturesSwitch />
      </div>
    </section>
  )
}
export default FeaturesSection