import * as style from '../../../../styles/app/Main/Sections/ui/no_there'
import { IconList } from '@tabler/icons-react'
import { TextBody } from '../../../../styles/still_work/still_work'
const NoThereList = () => {
  return (
    <style.NoThere>
      <IconList size={100} />
      <style.Headline>No tienes nada en tu lista</style.Headline>
      <TextBody>
        Adipisicing distinctio aperiam vel consequatur quibusdam incidunt Inventore nam voluptatem
        harum animi qui? Repellat deserunt odio ab laudantium tempore. Veniam?
      </TextBody>
    </style.NoThere>
  )
}
export default NoThereList
