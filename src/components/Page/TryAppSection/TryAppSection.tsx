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
            <img src={item.image} alt={item.device} />
            <h3>{item.device}</h3>
            <ul>
              <li></li>
            </ul>
            <button>Descargar aplicación</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TryAppSection
