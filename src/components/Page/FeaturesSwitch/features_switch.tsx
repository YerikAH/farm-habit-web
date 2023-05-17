import calendar from '../../../assets/calendar_image.png'
import remember from '../../../assets/notify_image.png'
import clock from '../../../assets/clock_image.png'
import chart from '../../../assets/chart_image.png'
import streak from '../../../assets/streak_image.png'
import {
  IconCalendarCheck,
  IconBellRinging,
  IconClockHour3,
  IconTargetArrow,
  IconChartInfographic,
} from '@tabler/icons-react'

export enum AllFeatures {
  resume = 'Obtén un resumen de tus hábitos',
  remember = 'Recordatorios de hábitos saludables',
  tempo = 'Temporizador de hábitos',
  streaks = 'Contador de rachas',
  chart = 'Estadísticas de productividad diaria',
}

export interface FeaturesOptions {
  id: number
  feature: AllFeatures
  description: string
  icon: JSX.Element
  iconActive: JSX.Element
  active: boolean
  image: string
}

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
