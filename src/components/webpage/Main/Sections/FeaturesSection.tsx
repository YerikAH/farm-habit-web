import * as style from '../../../../styles/webpage/main/sections/features'
import calendar from '../../../../assets/calendar_image.png'
import {
  IconBellRinging,
  IconCalendarCheck,
  IconChartInfographic,
  IconChevronDown,
  IconClockHour3,
  IconTargetArrow,
} from '@tabler/icons-react'

const FEATURES_CONST = [
  {
    id: 0,
    feature: 'Obtén un resumen de tus hábitos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quasi harum consectetur? Facere, quaerat natus!',
    icon: <IconCalendarCheck color='#363D4F'/>,
    iconActive: <IconCalendarCheck color='#4B7EFF'/>,
    active: true,
  },
  {
    id: 1,
    feature: 'Recordatorios de hábitos saludables',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quasi harum consectetur? Facere, quaerat natus!',
    icon: <IconBellRinging color='#363D4F'/>,
    iconActive: <IconBellRinging color='#4B7EFF'/>,
    active: false,
  },
  {
    id: 2,
    feature: 'Temporizador de hábitos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quasi harum consectetur? Facere, quaerat natus!',
    icon: <IconClockHour3 color='#363D4F'/>,
    iconActive: <IconClockHour3 color='#4B7EFF'/>,
    active: false,
  },
  {
    id: 3,
    feature: 'Contador de rachas',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quasi harum consectetur? Facere, quaerat natus!',
    icon: <IconTargetArrow color='#363D4F'/>,
    iconActive: <IconTargetArrow color='#4B7EFF'/>,
    active: false,
  },
  {
    id: 3,
    feature: 'Estadísticas de productividad diaria',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quasi harum consectetur? Facere, quaerat natus!',
    icon: <IconChartInfographic color='#363D4F'/>,
    iconActive: <IconChartInfographic color='#4B7EFF'/>,
    active: false,
  },
]
export const FeaturesSection = () => {
  return (
    <style.FeaturesStyle>
      <style.FeaturesBackground>
        <style.HeadlinePrincipal>
          Desarrolla hábitos saludables con nuestras herramientas
        </style.HeadlinePrincipal>
        <style.TextBodyOne>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat mi, tincidunt vitae
          risus sit amet, ultricies pretium ante. Curabitur eu lacinia augue. Aenean id fringilla
          ex, ac aliquet ligula.
        </style.TextBodyOne>
        <style.FeaturesGrid>
          <style.FeaturesGridOne>
            <style.ImageResponsive src={calendar} alt='feature app' />
          </style.FeaturesGridOne>
          <style.FeaturesGridTwo>
            {FEATURES_CONST.map((item) => (
              <style.ButtonOption key={item.id} className={`${item.active}`}>
                <style.ButtonSpace>
                  <style.ButtonOptionTitle>
                    {!item.active && item.icon}
                    {item.active && item.iconActive}
                    
                    <style.ButtonTitle className={`${item.active}`}>
                      {item.feature}
                    </style.ButtonTitle>
                  </style.ButtonOptionTitle>
                  <IconChevronDown
                    color={item.active ? '#4B7EFF' : '#363D4F'}
                    transform={item.active ? 'rotate(-180)' : 'rotate(0)'}
                  />
                </style.ButtonSpace>
                {item.active && <style.Description>{item.description}</style.Description>}
              </style.ButtonOption>
            ))}
          </style.FeaturesGridTwo>
        </style.FeaturesGrid>
      </style.FeaturesBackground>
    </style.FeaturesStyle>
  )
}
