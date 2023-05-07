import * as style from '../../../../styles/app/Main/Sections/screen_one'
import HabitsList from '../ui/HabitsList'
import NavScreenTwo from '../ui/NavScreenOne'

const ScreenOne = () => {
  return (
    <style.SreenOneStyles>
      <NavScreenTwo/>
      <HabitsList />
    </style.SreenOneStyles>
  )
}

export default ScreenOne
