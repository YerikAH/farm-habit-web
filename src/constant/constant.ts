import appFive from '../assets/app_5.png'
import appFour from '../assets/app_4.png'
import appThree from '../assets/app_3.png'
import appTwo from '../assets/app_2.png'
import appOne from '../assets/app_1.png'
import { InterfaceDesktopImages } from '../interface/interface'
import photoOne from '../assets/developers/photo-harvey.png'

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

export const DEVELOPER_LIST = [
  {
    id: 0,
    image: photoOne,
    name: 'Harvey Yerik',
    job: 'Desarrollador Full Stack',
    linkedin: 'https://www.linkedin.com/in/harvey-yerik-vasquez-huaranga-802218228/',
    github: 'https://github.com/YerikAH/',
  },
  {
    id: 1,
    image:
      'https://images.ecestaticos.com/vTc4g_7xb_nSqbTMm7KY0HYv0Yk=/119x87:4983x3534/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F542%2F18c%2F2b9%2F54218c2b95445ae1fea91aca9e37b53e.jpg',
    name: 'Jean L.',
    job: 'Ingeniero de software',
    linkedin: '',
    github: '',
  },
]
