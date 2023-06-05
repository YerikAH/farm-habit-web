import { IconChevronDown } from '@tabler/icons-react'
import { QuestionCardProps } from './props'
import s from './question_card.module.css'
import { useState } from 'react'

const QuestionCard = ({ title, text }: QuestionCardProps) => {
  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show)

  return (
    <div className={s.card}>
      <div className={s.card_title}>
        <h6>{title}</h6>
        <button onClick={handleClick}>
          <IconChevronDown />
        </button>
      </div>
      <div>{show && <p>{text}</p>}</div>
    </div>
  )
}

export default QuestionCard
