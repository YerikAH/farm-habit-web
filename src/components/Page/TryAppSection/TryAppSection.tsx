import { IconCheck, IconX } from '@tabler/icons-react'
import { DEVICES, TITLE, TEXT } from './try_app_section'
import s from './try_app_section.module.css'

const TryAppSection = () => {
  return (
    <section className={s.tryapp}>
      <h2 className={s.tryapp_title}>{TITLE}</h2>
      <p className={s.tryapp_text}>{TEXT}</p>
      <div className={s.tryapp_cards}>
        {DEVICES.map((item) => (
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
      </div>
    </section>
  )
}

export default TryAppSection
