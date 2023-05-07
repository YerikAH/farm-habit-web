import { IconSearch, IconSortDescending } from '@tabler/icons-react'
import * as style from '../../../../styles/app/Main/Sections/screen_two'

const NavScreenOne = () => {
  return (
    <style.NavigationScreenTwo>
      <style.FilterButton>
        <IconSortDescending />
        Filtrar
      </style.FilterButton>
      <style.InputSearchBox>
        <style.InputSearch placeholder='Buscar...' />
        <style.ButtonSearch>
          <IconSearch size={20} strokeWidth={3} />
        </style.ButtonSearch>
      </style.InputSearchBox>
    </style.NavigationScreenTwo>
  )
}
export default NavScreenOne
