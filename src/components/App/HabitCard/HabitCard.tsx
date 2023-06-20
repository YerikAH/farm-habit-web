import { IconBrain, IconDotsVertical } from '@tabler/icons-react'
import { addPMorAM } from '../../../helpers/helpers'
import { TEXT_DURATION } from './habit_card'
import s from './habit_card.module.css'

export interface HabitCardProps {
  title: string
  time: string
  duration: number
}


const HabitCard = ({ title, time, duration }: HabitCardProps) => {
  return (
    <div className={s.habit}>
      <div className={s.habit_info}>
        <div className={s.habit_info_icon}>
          <div className={s.habit_info_icon_div}>
            <IconBrain />
          </div>
        </div>
        <div className={s.habit_info_detail}>
          <h2 className={s.habit_info_detail_title}>{title}</h2>
          <p className={s.habit_info_detail_text}>{addPMorAM(time)}</p>
        </div>
      </div>
      <div className={s.habit_details}>
        <h4 className={s.habit_details_title}>{TEXT_DURATION}</h4>
        <p className={s.habit_details_text}>0 / {duration}min</p>
      </div>
      <button className={s.habit_button}>
        <IconDotsVertical />
      </button>
    </div>
  )
}

export default HabitCard
