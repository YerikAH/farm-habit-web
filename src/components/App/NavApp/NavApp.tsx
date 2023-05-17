import { IconCalendarEvent, IconSettings, IconSun, IconMenu2 } from '@tabler/icons-react'
import { getFormattedDate } from '../../../helpers/helpers'
import OptionsNav from '../OptionsNav/OptionsNav'
import s from './nav_app.module.css'

const NavApp = () => {
  return (
    <header className={s.header}>
      <nav className={s.header_nav}>
        <ul className={s.header_nav_ul}>
          <li className={s.header_nav_ul_li}>
            <button className={`${s.header_nav_ul_li_button} ${s['header_nav_ul_li_button--desktop']}`}>
              <IconCalendarEvent />
              {getFormattedDate()}
            </button>
            <button className={`${s.header_nav_ul_li_button} ${s['header_nav_ul_li_button--mobile']}`}>
              <IconMenu2 size={20} />
            </button>
          </li>
        </ul>
        <ul className={`${s.header_nav_ul} ${s['header_nav_ul--gap']}`}>
          <li className={s.header_nav_ul_li}>
            <button className={s.header_nav_ul_li_button_little}>
              <IconSettings />
            </button>
          </li>
          <li className={s.header_nav_ul_li}>
            <button className={s.header_nav_ul_li_button_little}>
              <IconSun />
            </button>
          </li>
          <li className={s.header_nav_ul_li}>
            <button className={s.header_nav_ul_li_button_big}>
              <img
                className={s.header_nav_ul_li_button_big_img}
                src='https://images.unsplash.com/photo-1610088441520-4352457e7095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvbWJyZXxlbnwwfHwwfHw%3D&w=1000&q=80'
                alt='profile'
              />
            </button>
          </li>
        </ul>
      </nav>
      <OptionsNav />
    </header>
  )
}

export default NavApp
