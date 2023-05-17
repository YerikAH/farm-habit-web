import LogoWhite from '../../../assets/images/LogoWhite'
import { TEXT } from './decoration_footer'
import s from './decoration_footer.module.css'

const DecorationFooter = () => {
  return (
    <div className={s.footer}>
      <div className={`${s.circle} ${s['circle--three']}`} />
      <div className={`${s.circle} ${s['circle--one']}`} />
      <div className={s.footer_box}>
        <div className={`${s.circle} ${s['circle--two']}`}  />
        <div className={`${s.circle} ${s['circle--zero']}`}  />
        <div className={s.footer_box_logo}>
          <LogoWhite />
        </div>
        <p className={s.footer_box_text}>{TEXT}</p>
      </div>
    </div>
  )
}

export default DecorationFooter
