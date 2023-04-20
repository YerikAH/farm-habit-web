import {
  IconCloudCode,
  IconCode,
  IconCodeDots,
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
