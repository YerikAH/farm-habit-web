import { IconSearch, IconSortDescending } from '@tabler/icons-react'
import { PLACEHOLDER, TEXT } from './filter_search'
import s from './filter_search.module.css'

const FilterSearch = () => {
  return (
    <div className={s.navigation}>
      <button className={s.navigation_button}>
        <IconSortDescending />
        {TEXT}
      </button>
      <div className={s.navigation_div}>
        <input className={s.navigation_div_input} placeholder={PLACEHOLDER} />
        <button className={s.navigation_div_button}>
          <IconSearch size={20} strokeWidth={3} />
        </button>
      </div>
    </div>
  )
}
export default FilterSearch
