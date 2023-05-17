import { IconPlant } from '@tabler/icons-react'
import { TEXT, TITLE } from './no_there_habits'
import s from './no_there_habits.module.css'

const NoThereHabits = () => {
  return (
    <div className={s.no_there}>
      <IconPlant size={150} color='#363d4f' />
      <h2 className={s.no_there_title}>{TITLE}</h2>
      <p className={s.no_there_text}>{TEXT}</p>
    </div>
  )
}
export default NoThereHabits
