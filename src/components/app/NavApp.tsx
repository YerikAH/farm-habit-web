import { IconCalendarEvent } from '@tabler/icons-react'
import * as style from '../../styles/app/Nav/nav_page'

const NavApp = () => {
  return (
    <style.HeaderPage>
      <style.NavPageStyles>
        <style.ListDesorder>
          <style.ListStyle>
            <style.ListLink>
              <IconCalendarEvent />
              Marzo 15, 2023
            </style.ListLink>
          </style.ListStyle>
        </style.ListDesorder>
        <style.ListDesorder>
          <style.ListStyle>
            <style.ListLink></style.ListLink>
          </style.ListStyle>
        </style.ListDesorder>
      </style.NavPageStyles>
    </style.HeaderPage>
  )
}

export default NavApp
