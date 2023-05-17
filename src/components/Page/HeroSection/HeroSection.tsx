import { IconChevronDown, IconDownload } from '@tabler/icons-react'
import CircleDecoration from '../CircleDecoration/CircleDecoration'
import { BUTTON_DOWNLOWAD, BUTTON_KNOW, TEXT, TITLE, TITLE_SPECIAL } from './hero_section'
import s from './hero_section.module.css'

const HeroSection = () => {
  return (
    <section className={s.section}>
      <CircleDecoration orientation='left' />
      <CircleDecoration />
      <h1 className={s.section_title}>
        {TITLE}
        <br />
        <h1 className={`${s.section_title} ${s['section_title--special']}`}> {TITLE_SPECIAL}</h1>
      </h1>
      <p className={s.section_text}>{TEXT}</p>
      <button className={s.section_button}>
        {BUTTON_DOWNLOWAD}
        <IconDownload color='#FFF' size={20} strokeWidth={2.5} />
      </button>
      <a href='#know' className={s.section_link}>
        {' '}
        {BUTTON_KNOW}
        <IconChevronDown />
      </a>
    </section>
  )
}

export default HeroSection
