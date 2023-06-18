import s from './card_devices.module.css'
import { IconCheck, IconX } from '@tabler/icons-react'

interface Props {
  DEVICES: Device[]
}
interface Device {
  id: number
  device: string
  image: string
  available: string[]
  noAvilable: string[]
  icon: JSX.Element
  button: string
}

const CardDevices = ({ DEVICES }: Props) => {
  return (
    <>
      {DEVICES.map(item => (
        <div className={s.tryapp_card} key={item.id}>
          <div className={s.tryapp_card_image}>
            <img src={item.image} alt={item.device} />
          </div>
          <h3>{item.device}</h3>
          <ul>
            {item.available.map((item, idx) => (
              <li key={idx}>
                <span>
                  <IconCheck />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ul>
            {item.noAvilable.map((item, idx) => (
              <li key={idx}>
                <span>
                  <IconX />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button>
            {item.icon}
            {item.button}
          </button>
        </div>
      ))}
    </>
  )
}
export default CardDevices
