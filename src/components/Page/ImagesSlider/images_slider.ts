import appFive from '../../../assets/app_5.png'
import appFour from '../../../assets/app_4.png'
import appThree from '../../../assets/app_3.png'
import appTwo from '../../../assets/app_2.png'
import appOne from '../../../assets/app_1.png'

export interface InterfaceDesktopImages {
  id: number,
  image: string
  index:number
}

export const IMAGES_DESKTOP: InterfaceDesktopImages[] = [
  {
    id: 4,
    image: appFive,
    index: 1,
  },
  {
    id: 3,
    image: appFour,
    index: 2,
  },
  {
    id: 0,
    image: appOne,
    index: 3,
  },
  {
    id: 1,
    image: appTwo,
    index: 2,
  },
  {
    id: 2,
    image: appThree,
    index: 1,
  },
]

