import s from './contribution_section.module.css'
import FormContribution from '../FormContribution/FormContribution'
import * as C from './contribution_sections'

const ContributionSection = () => {
  return (
    <section className={s.section}>
      <div className={s.section_bg}></div>
      <div className={s.section_blur}></div>
      <div className={s.section_content}>
        <h2 className={s.section_content_title}>{C.TITLE}</h2>
        <p className={s.section_content_text}>{C.TEXT}</p>
        <FormContribution />
        <p className={s.section_content_text}>
          {C.TEXT_BEFORE}{' '}
          <a href={C.LINK} className={`${s['section_content_text--link']}`}>
            {C.TEXT_LINK}
          </a>{' '}
          {C.TEXT_AFTER}
        </p>
      </div>
    </section>
  )
}

export default ContributionSection
