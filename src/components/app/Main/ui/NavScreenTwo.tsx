import { IconSearch } from '@tabler/icons-react'
import * as style from '../../../../styles/app/Main/Sections/screen_two'

const NavScreenTwo = () => {
  return (
    <style.NavigationScreenTwo>
      <style.FilterButton> Filtrar</style.FilterButton>
      <style.InputSearchBox>
        <style.InputSearch />
        <style.ButtonSearch>
          <IconSearch />
        </style.ButtonSearch>
      </style.InputSearchBox>
    </style.NavigationScreenTwo>
  )
}
export default NavScreenTwo
