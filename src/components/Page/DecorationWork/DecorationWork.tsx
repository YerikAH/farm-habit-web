import { IconKeyboard } from '@tabler/icons-react'
import { ICON_ANIMATIONS } from './decoration_work'
import s from './decoration_work.module.css'

const DecorationWork = () => {
  return (
    <div className={s.box}>
      <div className={s.box_icons}>
        {ICON_ANIMATIONS.map((item, index) => (
          <div
            key={index}
            className={s.box_icons_icon}
            id={`${item.y}`}
            style={{ top: `${item.y}rem`, left: `${item.x}rem` }}
          >
            {item.icon}
          </div>
        ))}
      </div>
      <IconKeyboard size={250} color='#363d4f' />
    </div>
  )
}

export default DecorationWork
