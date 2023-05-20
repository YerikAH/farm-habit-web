import s from './moda_cookies.module.css'
import { BUTTON, TITLE } from './modal_cookies'

export const ModalCookies = () => {
  return (
    <div className={s.screen}>
      <div className={s.screen_modal}>
        <span className={s['screen_modal-text']}>{TITLE}</span>
        <button className={`${s.screen_modal__button} ${s['screen_modal-text']}`}>{BUTTON}</button>
      </div>
    </div>
  )
}
