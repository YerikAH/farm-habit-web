import {
  IconCode,
  IconDivide,
  IconGitPullRequest,
  IconKeyboard,
  IconMathIntegralX,
  IconMathPi,
  IconMinus,
  IconMultiplier05x,
  IconPlus,
  IconRegex,
  IconVariable,
} from '@tabler/icons-react'
import * as style from '../../../../styles/still_work/still_work'
const ICON_ANIMATIONS = [
  {
    icon: <IconPlus />,
    x: 10,
    y: -7,
  },
  {
    icon: <IconMinus />,
    x: 0,
    y: 0,
  },
  {
    icon: <IconDivide />,
    x: 0,
    y: 0,
  },
  {
    icon: <IconMultiplier05x />,
    x: 0,
    y: 0,
  },
  {
    icon: <IconVariable />,
    x: 0,
    y: 0,
  },
  {
    icon: <IconMathIntegralX />,
    x: 0,
    y: 0,
  },
  {
    icon: <IconMathPi />,
    x: 0,
    y: 0,
  },
  {
    icon: <IconCode />,
    x: 0,
    y: 0,
  },
  {
    icon: <IconPlus />,
    x: 0,
    y: 0,
  },
  {
    icon: <IconGitPullRequest />,
    x: 0,
    y: 0,
  },
]

const DecorationWork = () => {
  return (
    <style.BoxDecoration>
      <style.BoxDecorationIcons>
        {ICON_ANIMATIONS.map((item, index) => (
          <style.IconAnimation key={index} className={`${item.x}`} id={`${item.y}`}>
            {item.icon}
          </style.IconAnimation>
        ))}
      </style.BoxDecorationIcons>
      <IconKeyboard size={250} color='#363d4f' />
    </style.BoxDecoration>
  )
}

export default DecorationWork
