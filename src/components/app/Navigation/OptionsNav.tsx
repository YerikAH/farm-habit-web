import {
  IconPlus,
  IconSquareRoundedCheck,
  IconChartInfographic,
  IconAlarm,
  IconHourglassHigh,
  IconAdjustmentsHorizontal,
  IconListCheck,
  IconSquareRoundedPlus,
} from '@tabler/icons-react'
import * as style from '../../../styles/app/Nav/options_nav'
import AddHabit from '../Main/modals/AddHabit'
const OPTIONS_PAGE = [
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
const OptionsNav = () => {
  return (
    <style.OptionsNavStyles>
      <style.ButtonOptionsBox>
        {OPTIONS_PAGE.map((item) => (
          <style.ButtonPage key={item.id} className={`${item.active}`}>
            {item.active ? item.icon_active : item.icon}
            {item.name}
          </style.ButtonPage>
        ))}
      </style.ButtonOptionsBox>
      <style.TitleOptions>STACK HABITOS</style.TitleOptions>
      <style.ButtonOptionsBox>
        <style.ButtonExtra>
          <IconPlus />
          Nuevo stack
        </style.ButtonExtra>
      </style.ButtonOptionsBox>

      <style.TitleOptions>HERRAMIENTAS</style.TitleOptions>
      <style.ButtonOptionsBox>
        <style.ButtonExtra>
          <IconListCheck />
          Todo List
        </style.ButtonExtra>
        <style.ButtonExtra>
          <IconHourglassHigh />
          Pomodoro
        </style.ButtonExtra>
        <style.ButtonExtra>
          <IconAdjustmentsHorizontal />
          Gestionar
        </style.ButtonExtra>
      </style.ButtonOptionsBox>

      <style.TitleOptions>FUNCIONES</style.TitleOptions>

      <style.ButtonOptionsBox>
        <style.ButtonExtra>
          <IconSquareRoundedPlus />
          Agregar habito
        </style.ButtonExtra>
      </style.ButtonOptionsBox>
      <AddHabit/>
    </style.OptionsNavStyles>
  )
}

export default OptionsNav
