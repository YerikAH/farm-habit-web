import { IconCalendarEvent, IconSettings, IconSun, IconMenu2 } from '@tabler/icons-react'
import * as style from '../../styles/app/Nav/nav_page'
import OptionsNav from './Navigation/OptionsNav'

const NavApp = () => {
  return (
    <style.HeaderPage>
      <style.NavPageStyles>
        <style.ListDesorder>
          <style.ListStyle>
            <style.ListLink className='desktop'>
              <IconCalendarEvent />
              Marzo 15, 2023
            </style.ListLink>
            <style.ListLink className='mobile'>
              <IconMenu2 size={20} />
            </style.ListLink>
          </style.ListStyle>
        </style.ListDesorder>
        <style.ListDesorder className='1'>
          <style.ListStyle>
            <style.ListButtonLittle>
              <IconSettings />
            </style.ListButtonLittle>
          </style.ListStyle>
          <style.ListStyle>
            <style.ListButtonLittle>
              <IconSun />
            </style.ListButtonLittle>
          </style.ListStyle>
          <style.ListStyle>
            <style.ListButtonBig>
              <style.PlaceImage
                src='https://images.unsplash.com/photo-1610088441520-4352457e7095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvbWJyZXxlbnwwfHwwfHw%3D&w=1000&q=80'
                alt='profile'
              />
            </style.ListButtonBig>
          </style.ListStyle>
        </style.ListDesorder>
      </style.NavPageStyles>
      <OptionsNav />
    </style.HeaderPage>
  )
}

export default NavApp
