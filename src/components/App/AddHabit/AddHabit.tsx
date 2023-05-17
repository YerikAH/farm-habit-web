import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'
import { elementHtmlSelect } from '../../../helpers/helpers'
import { IconX, IconChevronDown } from '@tabler/icons-react'
import { ModalProps } from './props'
import s from './add_habit.module.css'
import {
  BUTTON_CANCEL,
  BUTTON_DAYS,
  BUTTON_HOUR,
  BUTTON_MINUTE,
  LABEL_DAYS,
  LABEL_ICON,
  LABEL_NAME,
  LABEL_TIME,
} from './add_habit'

const AddHabit = ({ modal, setModal, title }: ModalProps) => {
  const elementHTML = document.getElementById('add')
  const [styles, setStyles] = useState('')
  const handleClick = () => setModal(!modal)
  useEffect(() => {
    if (modal) {
      setStyles('modal--active')
    } else {
      setStyles('')
    }
  }, [modal])

  return ReactDOM.createPortal(
    <div className={`${s.modal} ${s[styles]}`}>
      <div className={s.modal_box}>
        <button className={s.modal_box_button} onClick={handleClick}>
          <IconX />
        </button>
        <h3 className={s.modal_box_title}>{title + ' '} hábito</h3>
        <form className={s.modal_box_form}>
          <div>
            <div className={s.modal_box_form_space}>
              <label className={s.modal_box_form_space_label}>{LABEL_NAME}</label>
              <input className={s.modal_box_form_space_input} />
            </div>
            <div className={s.modal_box_form_space}>
              <label className={s.modal_box_form_space_label}>{LABEL_DAYS}</label>
              <div className={s.modal_box_form_space_label_div}>
                {BUTTON_DAYS.map((item) => (
                  <button
                    key={item.id}
                    className={
                      !item.active
                        ? `${s.modal_box_form_space_label_div_button}`
                        : `${s.modal_box_form_space_label_div_button} ${s['modal_box_form_space_label_div_button--active']}`
                    }
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className={s.modal_box_form_space}>
              <label className={s.modal_box_form_space_label}>{LABEL_ICON}</label>
              <button className={s.modal_box_form_space_button}>
                <IconChevronDown />
              </button>
            </div>
            <div className={s.modal_box_form_space}>
              <label className={s.modal_box_form_space_label}>{LABEL_TIME}</label>
              <div className={s.modal_box_form_space_label_div_select}>
                <button className={s.modal_box_form_space_button}>
                  {BUTTON_HOUR}
                  <IconChevronDown />
                </button>
                <button className={s.modal_box_form_space_button}>
                  {BUTTON_MINUTE}
                  <IconChevronDown />
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className={s.modal_box_div}>
          <button className={`${s.modal_box_div_button} ${s['modal_box_div_button--red']}`}>
            {BUTTON_CANCEL}
          </button>
          <button className={`${s.modal_box_div_button} ${s['modal_box_div_button--blue']}`}>{title}</button>
        </div>
      </div>
    </div>,
    elementHtmlSelect(elementHTML, 'add'),
  )
}

export default AddHabit
