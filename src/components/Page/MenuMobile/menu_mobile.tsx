import { IconAppWindow, IconCode, IconHome } from '@tabler/icons-react'
import { PathRoutes } from '../../../enum/enum'

export interface MenuWebPage {
  id: number
  name: string
  active: boolean
  icon: JSX.Element
  path: PathRoutes
}

export const MENU_CONTANT: MenuWebPage[] = [
  {
    id: 0,
    name: 'Aplicación web',
    active: false,
    icon: <IconAppWindow />,
    path: PathRoutes.work,
  },
  {
    id: 1,
    name: 'Inicio',
    active: false,
    icon: <IconHome />,
    path: PathRoutes.webpage,
  },
  {
    id: 2,
    name: 'Desarrolladores',
    active: false,
    icon: <IconCode />,
    path: PathRoutes.developers,
  },
]
export interface MenuMobileInterface {
  menu: boolean
  setMenu(menu: boolean): void
}
export const MENU_MOBILE_CLASS = 'menu_mobile--active'
export const TEXT = 'Intentar'
