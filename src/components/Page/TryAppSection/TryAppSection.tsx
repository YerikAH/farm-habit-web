import { DEVICES, TITLE, TEXT } from './try_app_section'
import s from './try_app_section.module.css'
import SectionWithDescription from '../shared/SectionWithDescription/SectionWithDescription'
import CardDevices from '../CardDevices/CardDevices'

const TryAppSection = () => {
  return (
    <section className={s.tryapp}>
      <SectionWithDescription title={TITLE} description={TEXT} />
      <div className={s.tryapp_cards}>
        <CardDevices DEVICES={DEVICES} />
      </div>
    </section>
  )
}

export default TryAppSection
