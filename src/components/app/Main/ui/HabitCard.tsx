import { IconBrain, IconDotsVertical } from '@tabler/icons-react'
import * as style from '../../../../styles/app/Main/Sections/screen_two'

const HabitCard = () => {
  return (
    <style.HabitBox>
      <style.HabitImportant>
        <style.IconHabitBox>
          <style.IconHabit>
            <IconBrain />
          </style.IconHabit>
        </style.IconHabitBox>
        <style.HabitBoxDetails>
          <style.TitleHabit>Hacer ejercicios</style.TitleHabit>
          <style.TimeHabit>6:00 A.M</style.TimeHabit>
        </style.HabitBoxDetails>
      </style.HabitImportant>
      <style.HabitBoxDetails>
        <style.TitleHabitDuration>Duración: </style.TitleHabitDuration>
        <style.HabitDuration>0 / 10 min</style.HabitDuration>
      </style.HabitBoxDetails>
      <style.IconButton>
        <IconDotsVertical />
      </style.IconButton>
    </style.HabitBox>
  )
}

export default HabitCard
