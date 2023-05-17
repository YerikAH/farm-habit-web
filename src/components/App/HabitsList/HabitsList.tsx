import HabitCard from '../HabitCard/HabitCard'
import s from './habits_list.module.css'

const HabitsList = () => {
  return (
    <div className={s.habits_box}>
      <HabitCard title='Hacer ejercicios' time='6:00' duration={10} />
      <HabitCard title='Hacer ejercicios' time='6:00' duration={10} />
      <HabitCard title='Hacer ejercicios' time='6:00' duration={10} />
      <HabitCard title='Hacer ejercicios' time='6:00' duration={10} />
      <HabitCard title='Hacer ejercicios' time='6:00' duration={10} />
    </div>
  )
}

export default HabitsList
