import CardDevelopers from '../CardDevelopers/CardDevelopers'
import CircleDecoration from '../CircleDecoration/CircleDecoration'
import { TEXT, TITLE } from './developer_section'
import s from './developer_section.module.css'

const DevelopersSection = () => {
  return (
    <section className={s.section}>
      <CircleDecoration orientation='left' />
      <CircleDecoration />
      <h1 className={s.section_title}>{TITLE}</h1>
      <p className={s.section_text}>{TEXT}</p>
      <CardDevelopers />
    </section>
  )
}

export default DevelopersSection
