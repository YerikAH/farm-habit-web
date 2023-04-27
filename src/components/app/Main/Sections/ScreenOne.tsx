import { IconPlant } from '@tabler/icons-react'
import * as style from '../../../../styles/app/Main/Sections/screen_one'

const ScreenOne = () => {
  return (
    <style.SreenOneStyles>
      <style.NoThereHabits>
        <IconPlant size={150} color='#363d4f' />
        <style.HeadlineNoHabits>Cultiva un nuevo habito</style.HeadlineNoHabits>
        <style.TextBodyOne>
          Cada hábito que cultivas es una semilla que plantas para tu futuro. ¡Cultiva uno nuevo hoy
          y cosecha grandes recompensas mañana!
        </style.TextBodyOne>
      </style.NoThereHabits>
    </style.SreenOneStyles>
  )
}

export default ScreenOne
