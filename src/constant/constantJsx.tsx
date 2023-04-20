import calendar from '../assets/calendar_image.png'
import remember from '../assets/notify_image.png'
import clock from '../assets/clock_image.png'
import chart from '../assets/chart_image.png'
import streak from '../assets/streak_image.png'
import {
  IconAppWindow,
  IconBellRinging,
  IconCalendarCheck,
  IconChartInfographic,
  IconClockHour3,
  IconCloudCode,
  IconCode,
  IconCodeDots,
  IconDivide,
  IconGitPullRequest,
  IconHome,
  IconMathIntegralX,
  IconMathPi,
  IconMinus,
  IconMultiplier05x,
  IconPlus,
  IconRegex,
  IconTargetArrow,
  IconVariable,
} from '@tabler/icons-react'
import { AllFeatures, PathRoutes } from '../enum/enum'
import { FeaturesOptions, MenuWebPage } from '../interface/interface'

export const FEATURES_CONST: FeaturesOptions[] = [
  {
    id: 0,
    feature: AllFeatures.resume,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quasi harum consectetur? Facere, quaerat natus!',
    icon: <IconCalendarCheck color='#363D4F' />,
    iconActive: <IconCalendarCheck color='#4B7EFF' />,
    active: true,
    image: calendar,
  },
  {
    id: 1,
    feature: AllFeatures.remember,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quasi harum consectetur? Facere, quaerat natus!',
    icon: <IconBellRinging color='#363D4F' />,
    iconActive: <IconBellRinging color='#4B7EFF' />,
    active: false,
    image: remember,
  },
  {
    id: 2,
    feature: AllFeatures.tempo,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quasi harum consectetur? Facere, quaerat natus!',
    icon: <IconClockHour3 color='#363D4F' />,
    iconActive: <IconClockHour3 color='#4B7EFF' />,
    active: false,
    image: clock,
  },
  {
    id: 3,
    feature: AllFeatures.streaks,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quasi harum consectetur? Facere, quaerat natus!',
    icon: <IconTargetArrow color='#363D4F' />,
    iconActive: <IconTargetArrow color='#4B7EFF' />,
    active: false,
    image: streak,
  },
  {
    id: 4,
    feature: AllFeatures.chart,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quasi harum consectetur? Facere, quaerat natus!',
    icon: <IconChartInfographic color='#363D4F' />,
    iconActive: <IconChartInfographic color='#4B7EFF' />,
    active: false,
    image: chart,
  },
]

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
export const ICON_ANIMATIONS = [
  {
    icon: <IconPlus color='#363d4f' />,
    x: 10,
    y: -7,
  },
  {
    icon: <IconMinus color='#363d4f' />,
    x: 14,
    y: -6,
  },
  {
    icon: <IconDivide color='#363d4f' />,
    x: 8,
    y: -4,
  },
  {
    icon: <IconMultiplier05x color='#363d4f' />,
    x: 1,
    y: -7,
  },
  {
    icon: <IconVariable color='#363d4f' />,
    x: -1,
    y: -4,
  },
  {
    icon: <IconMathIntegralX color='#363d4f' />,
    x: -7,
    y: -7,
  },
  {
    icon: <IconMathPi color='#363d4f' />,
    x: 0,
    y: -1,
  },
  {
    icon: <IconCode color='#363d4f' />,
    x: -13,
    y: -4,
  },
  {
    icon: <IconGitPullRequest color='#363d4f' />,
    x: -10,
    y: -2,
  },
  {
    icon: <IconCodeDots color='#363d4f' />,
    x: -16,
    y: -1,
  },
  {
    icon: <IconRegex color='#363d4f' />,
    x: 3,
    y: -3,
  },
  {
    icon: <IconCloudCode color='#363d4f' />,
    x: -2,
    y: -1,
  },
]
