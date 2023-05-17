import HabitsList from '../HabitsList/HabitsList'
import FilterSearch from '../FilterSearch/FilterSearch'
import s from './screen_one.module.css'

const ScreenOne = () => {
  return (
    <div className={s.screen_one}>
      <FilterSearch />
      <HabitsList />
    </div>
  )
}

export default ScreenOne
