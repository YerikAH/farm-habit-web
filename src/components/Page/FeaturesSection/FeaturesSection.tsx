import FeaturesSwitch from '../FeaturesSwitch/FeaturesSwitch'
import { TEXT, TITLE } from './features_section'
import s from './features_section.module.css'

const FeaturesSection = () => {
  return (
    <section className={s.section}>
      <div className={s.section_bg}>
        <h2 className={s.section_title}>{TITLE}</h2>
        <p className={s.section_text}>{TEXT}</p>
        <FeaturesSwitch />
      </div>
    </section>
  )
}
export default FeaturesSection