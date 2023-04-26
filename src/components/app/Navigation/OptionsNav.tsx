import { IconSquareRoundedCheck, IconChartInfographic, IconAlarm } from '@tabler/icons-react'
import * as style from '../../../styles/app/Nav/options_nav'
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
    </style.OptionsNavStyles>
  )
}

export default OptionsNav
