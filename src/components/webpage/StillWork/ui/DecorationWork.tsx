import { IconKeyboard } from '@tabler/icons-react'
import * as style from '../../../../styles/still_work/still_work'
import { ICON_ANIMATIONS } from '../../../../constant/constantJsx'

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
