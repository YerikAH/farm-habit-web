import { AllFeatures, PathRoutes } from '../enum/enum'

export interface FeaturesOptions {
  id: number
  feature: AllFeatures
  description: string
  icon: JSX.Element
  iconActive: JSX.Element
  active: boolean
  image: string
}

export interface InterfaceDesktopImages {
  id: number,
  image: string
  index:number
}
export interface MenuWebPage {
  id: number,
  name: string,
  active: boolean,
  icon: JSX.Element,
  path: PathRoutes
}