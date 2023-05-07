import * as style from '../../../../styles/app/Main/Sections/ui/no_there'
import { IconPlant } from '@tabler/icons-react'
const NoThereHabits = () => {
  return (
    <style.NoThere>
      <IconPlant size={150} color='#363d4f' />
      <style.Headline>Cultiva un nuevo habito</style.Headline>
      <style.TextBodyOne>
        Cada hábito que cultivas es una semilla que plantas para tu futuro. ¡Cultiva uno nuevo hoy y
        cosecha grandes recompensas mañana!
      </style.TextBodyOne>
    </style.NoThere>
  )
}
export default NoThereHabits
