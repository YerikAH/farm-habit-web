import { IconApps, IconMenu2 } from '@tabler/icons-react'
import * as style from '../../../styles/webpage/navigation/navigation'
import Logo from '../../images/Logo'
import { MENU_CONTANT } from '../../../constant/constantJsx'
import MenuMobile from './MenuMobile'
import { useState } from 'react'

export const Navigation = () => {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <style.HeaderStyle>
        <style.NavigationStyles>
          <style.Navbar>
            <style.NavItem>
              <style.NavLink to='/'>
                <Logo />
              </style.NavLink>
            </style.NavItem>
          </style.Navbar>

          <style.Navbar className='desktop'>
            {MENU_CONTANT.map((item) => (
              <style.NavItem key={item.id}>
                <style.NavLink to={item.path}>{item.name}</style.NavLink>
              </style.NavItem>
            ))}
          </style.Navbar>

          <style.Navbar className='desktop'>
            <style.NavItem>
              <style.NavLinkButton>
                <IconApps />
                Intentar
              </style.NavLinkButton>
            </style.NavItem>
          </style.Navbar>

          <style.NavbarHam onClick={()=> setMenu(!menu)}>
            <IconMenu2 />
          </style.NavbarHam>
        </style.NavigationStyles>
      </style.HeaderStyle>
      <MenuMobile menu={menu} setMenu={setMenu}/>
    </>
  )
}
