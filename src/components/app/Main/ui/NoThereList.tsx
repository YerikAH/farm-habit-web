import * as style from '../../../../styles/app/Main/Sections/ui/no_there'
import {  IconNotes } from '@tabler/icons-react'
const NoThereList = () => {
  return (
    <style.NoThere>
      <IconNotes size={150} color='#363d4f' />
      <style.Headline>No tienes nada en tu lista</style.Headline>
      <style.TextBodyOne>
        Adipisicing distinctio aperiam vel consequatur quibusdam incidunt Inventore nam voluptatem
        harum animi qui? Repellat deserunt odio ab laudantium tempore. Veniam?
      </style.TextBodyOne>
    </style.NoThere>
  )
}
export default NoThereList
