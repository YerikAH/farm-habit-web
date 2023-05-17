import {
  IconSquareRoundedCheck,
  IconChartInfographic,
  IconAlarm,
  IconListCheck,
  IconHourglassHigh,
  IconAdjustmentsHorizontal,
} from '@tabler/icons-react'

export const OPTIONS_PAGE = [
  {
    id: 0,
    name: 'Todos mis habitos',
    icon: <IconSquareRoundedCheck />,
    icon_active: <IconSquareRoundedCheck color='#FFF' />,
    active: true,
  },
  {
    id: 1,
    name: 'Estadisticas',
    icon: <IconChartInfographic />,
    icon_active: <IconChartInfographic color='#FFF' />,
    active: false,
  },
  {
    id: 2,
    name: 'Horario',
    icon: <IconAlarm />,
    icon_active: <IconAlarm color='#FFF' />,
    active: false,
  },
]
export const FEATURES_APP = [
  {
    id: 0,
    name: 'Todo List',
    icon: <IconListCheck />,
  },
  {
    id: 1,
    name: 'Pomodoro',
    icon: <IconHourglassHigh />,
  },
  {
    id: 2,
    name: 'Gestionar',
    icon: <IconAdjustmentsHorizontal />,
  },
]
export const FUNCTIONS_APP = [
  {
    id: 0,
    name: 'Agregar hábito',
    icon: <IconListCheck />,
  },
]
export const TITLE_1 = 'STACK HABITOS'
export const TITLE_2 = 'HERRAMIENTAS'
export const TITLE_3 = 'FUNCIONES'
