import { IconChevronDown } from '@tabler/icons-react'
import { QuestionCardProps } from './props'
import s from './question_card.module.css'
import { useEffect, useState } from 'react'

const QuestionCard = ({ title, text }: QuestionCardProps) => {
  const [show, setShow] = useState(false)
  const [styles, setStyles] = useState('')

  const handleClick = () => setShow(!show)

  const toggleArrow = () => {
    if(show) setStyles('--active')
    else setStyles('')
  }

  useEffect(() => {
    toggleArrow()
  }, [show]) 
  return (
    <div className={s.card}>
      <div className={s.card_title}>
        <h6>{title}</h6>
        <button onClick={handleClick} className={s[styles]}>
          <IconChevronDown />
        </button>
      </div>
      <div>{show && <p>{text}</p>}</div>
    </div>
  )
}

export default QuestionCard
