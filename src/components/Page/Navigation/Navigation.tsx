import { useState } from 'react'
import { IconApps, IconMenu2 } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { MENU_CONTANT, TEXT } from './navigation_interface'
import Logo from '../../../assets/images/Logo'
import MenuMobile from '../MenuMobile/MenuMobile'
import s from './navigation.module.css'

const Navigation = () => {
  const [menu, setMenu] = useState(true)
  return (
    <>
      <header className={s.header}>
        <nav className={s.header_nav}>
          <ul className={s.header_nav_ul}>
            <li>
              <Link className={s.header_nav_ul_a} to='/' tabIndex={1}>
                <Logo />
              </Link>
            </li>
          </ul>

          <ul className={`${s.header_nav_ul} ${s['header_nav_ul--desktop']}`}>
            {MENU_CONTANT.map(item => (
              <li key={item.id}>
                <Link className={s.header_nav_ul_a} to={item.path} tabIndex={1}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <ul className={`${s.header_nav_ul} ${s['header_nav_ul--desktop']}`}>
            <li>
              <a className={`${s.header_nav_ul_a} ${s['header_nav_ul_a--special']}`} href='#know'>
                <IconApps />
                {TEXT}
              </a>
            </li>
          </ul>

          <button className={s.header_nav_ul_button} onClick={() => setMenu(!menu)}>
            <IconMenu2 />
          </button>
        </nav>
      </header>
      <MenuMobile menu={menu} setMenu={setMenu} />
    </>
  )
}
export default Navigation
