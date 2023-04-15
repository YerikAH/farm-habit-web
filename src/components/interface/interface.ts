import { AllFeatures } from '../../enum/enum'

export interface FeaturesOptions {
  id: number
  feature: AllFeatures
  description: string
  icon: JSX.Element
  iconActive: JSX.Element
  active: boolean
}

export interface InterfaceDesktopImages {
  id: number,
  image: string
  index:number
}