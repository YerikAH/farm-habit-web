import { IconArrowBack } from '@tabler/icons-react'
import { PathRoutes } from '../../../enum/enum'
import DecorationWork from '../DecorationWork/DecorationWork'
import { BUTTON, TEXT, TITLE } from './section_still_work'
import { Link } from 'react-router-dom'
import s from './section_still_work.module.css'

const SectionStillWork = () => {
  return (
    <section className={s.section}>
      <DecorationWork />
      <h2 className={s.section_title}>{TITLE}</h2>
      <p className={s.section_text}>{TEXT}</p>
      <Link className={s.section_button} to={PathRoutes.webpage}>
        <IconArrowBack color='#FFF' />
        {BUTTON}
      </Link>
    </section>
  )
}

export default SectionStillWork
