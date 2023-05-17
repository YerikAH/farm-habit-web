import { IconArrowBack } from '@tabler/icons-react'
import { PathRoutes } from '../../../enum/enum'
import { Link } from 'react-router-dom'
import { BUTTON, ERROR, TEXT, TITLE } from './section_error'
import s from './section_error.module.css'

const SectionError = () => {
  return (
    <section className={s.section}>
      <h2 className={s.section_title}>
        {TITLE} <span className={s.section_title_just}>{ERROR}</span>
      </h2>
      <p className={s.section_text}>{TEXT}</p>
      <Link className={s.section_button} to={PathRoutes.webpage}>
        {BUTTON}
        <IconArrowBack color='#FFF' />
      </Link>
    </section>
  )
}

export default SectionError
