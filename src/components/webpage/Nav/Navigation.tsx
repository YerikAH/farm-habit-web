import { IconApps } from '@tabler/icons-react'
import * as style from '../../../styles/webpage/navigation/navigation'
import Logo from '../../images/Logo'

export const Navigation = () => {
  return (
    <style.HeaderStyle>
      <style.NavigationStyles>
        <style.Navbar>
          <style.NavItem>
            <style.NavLink to='/'>
              <Logo/>
            </style.NavLink>
          </style.NavItem>
        </style.Navbar>

        <style.Navbar>
          <style.NavItem>
            <style.NavLink to='/'>Inicio</style.NavLink>
          </style.NavItem>
          <style.NavItem>
            <style.NavLink to='/'>Desarrolladores</style.NavLink>
          </style.NavItem>
          <style.NavItem>
            <style.NavLink to='/'>Aplicación web</style.NavLink>
          </style.NavItem>
        </style.Navbar>

        <style.Navbar>
          <style.NavItem>
            <style.NavLinkButton>
              <IconApps />
              Intentar
            </style.NavLinkButton>
          </style.NavItem>
        </style.Navbar>
      </style.NavigationStyles>
    </style.HeaderStyle>
  )
}
