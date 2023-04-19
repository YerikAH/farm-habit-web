import { IconApps, IconX } from '@tabler/icons-react'
import { MENU_CONTANT } from '../../../constant/constantJsx'
import * as style from '../../../styles/webpage/navigation/menu_mobile'
import { MenuMobileInterface } from '../../../interface/props'
import { useEffect, useState } from 'react'
import { MENU_MOBILE_CLASS } from '../../../constant/classDinamic'

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
    <style.MenuMobileStyles className={styleClass}>
      <style.MenuMobileCenter>
        <style.ButtonCloseBox>
          <style.ButtonCloseHam onClick={() => setMenu(!menu)}>
            <IconX />
          </style.ButtonCloseHam>
        </style.ButtonCloseBox>
        <style.MenuMobileUl>
          {MENU_CONTANT.map((item) => (
            <style.MenuMobileList key={item.id}>
              <style.MenuMobileLink to={item.path}>
                {item.icon}
                {item.name}
              </style.MenuMobileLink>
            </style.MenuMobileList>
          ))}
        </style.MenuMobileUl>
        <style.MenuMobileTry>
          <IconApps />
          Intentar
        </style.MenuMobileTry>
      </style.MenuMobileCenter>
    </style.MenuMobileStyles>
  )
}

export default MenuMobile
