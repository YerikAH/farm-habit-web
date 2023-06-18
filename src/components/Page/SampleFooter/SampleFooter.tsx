import { TEXT } from './sample_footer'
import { GITHUB } from '../../../constant/link'
import IconGithub from '../../../assets/images/IconGithub'
import s from './sample_footer.module.css'

const SampleFooter = () => {
  return (
    <div className={s.sample_footer}>
      <a href={GITHUB} className={s.sample_footer_link}>
        <IconGithub />
      </a>
      <p className={s.sample_footer_text}>{TEXT}</p>
    </div>
  )
}
export default SampleFooter
