import { DEVICES } from './try_app_section'
import s from './try_app_section.module.css'

const TryAppSection = () => {
  return (
    <section className={s.tryapp}>
      <h2 className={s.section_title}>{TITLE}</h2>
      <p className={s.section_text}>{TEXT}</p>
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
    </section>
  )
}

export default TryAppSection
