import { IconPlus } from '@tabler/icons-react'
import { useState } from 'react'
import AddHabit from '../AddHabit/AddHabit'
import { FEATURES_APP, FUNCTIONS_APP, OPTIONS_PAGE, TITLE_1, TITLE_2, TITLE_3 } from './options_nav'
import s from './options_nav.module.css'

const OptionsNav = () => {
  const [addHabit, setAddHabit] = useState(false)
  const handleClick = () => setAddHabit(!addHabit)

  return (
    <nav className={s.nav}>
      <div className={s.nav_div}>
        {OPTIONS_PAGE.map((item) => (
          <button
            key={item.id}
            className={`${s.button} ${item.active ? `${s['nav_div--active']}` : `${s['nav_div--deactive']}`}`}
          >
            {item.active ? item.icon_active : item.icon}
            {item.name}
          </button>
        ))}
      </div>
      <h3 className={s.nav_title}>{TITLE_1}</h3>
      <div className={s.nav_div}>
        <button className={`${s.button} ${s['nav_div--extra']}`}>
          <IconPlus />
          Nuevo stack
        </button>
      </div>

      <h3 className={s.nav_title}>{TITLE_2}</h3>
      <div className={s.nav_div}>
        {FEATURES_APP.map((item) => (
          <button key={item.id} className={`${s.button} ${s['nav_div--extra']}`}>
            {item.icon}
            {item.name}
          </button>
        ))}
      </div>

      <h3 className={s.nav_title}>{TITLE_3}</h3>

      <div className={s.nav_div}>
        {FUNCTIONS_APP.map((item) => (
          <button key={item.id} className={`${s.button} ${s['nav_div--extra']}`} onClick={handleClick}>
            {item.icon}
            {item.name}
          </button>
        ))}
      </div>
      <AddHabit modal={addHabit} setModal={setAddHabit} title='Añadir hábito' />
    </nav>
  )
}

export default OptionsNav
