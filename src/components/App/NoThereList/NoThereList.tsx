import { IconNotes } from '@tabler/icons-react'
import { TEXT, TITLE } from './no_there_list'
import s from './no_there_list.module.css'

const NoThereList = () => {
  return (
    <div className={s.no_there}>
      <IconNotes size={150} color='#363d4f' />
      <h2 className={s.no_there_title}>{TITLE}</h2>
      <p className={s.no_there_text}>{TEXT}</p>
    </div>
  )
}
export default NoThereList
