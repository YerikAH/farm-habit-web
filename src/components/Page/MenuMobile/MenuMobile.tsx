import { useEffect, useState } from 'react'
import { IconApps, IconX } from '@tabler/icons-react'
import { MENU_MOBILE_CLASS, MenuMobileInterface, MENU_CONTANT, TEXT } from './menu_mobile'
import { Link } from 'react-router-dom'
import s from './menu_mobile.module.css'

const MenuMobile = ({ menu, setMenu }: MenuMobileInterface) => {
  const [styleClass, setStyleClass] = useState('')
  useEffect(() => {
    if (menu) {
      setStyleClass(MENU_MOBILE_CLASS)
    } else {
      setStyleClass('')
    }
  }, [menu])

  return (
    <div className={`${s.menu_mobile} ${s[styleClass]}`}>
      <div className={s.menu_mobile_center}>
        <div className={s.menu_mobile_center_box}>
          <button className={s.menu_mobile_center_box_button} onClick={() => setMenu(!menu)}>
            <IconX />
          </button>
        </div>
        <ul className={s.menu_mobile_center_ul}>
          {MENU_CONTANT.map(item => (
            <li className={s.menu_mobile_center_ul_li} key={item.id}>
              <Link className={s.menu_mobile_center_ul_li_a} to={item.path}>
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className={s.menu_mobile_center_button}>
          <IconApps />
          {TEXT}
        </button>
      </div>
    </div>
  )
}

export default MenuMobile
