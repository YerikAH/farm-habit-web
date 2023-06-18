import { IconChevronDown } from '@tabler/icons-react'
import s from './question_card.module.css'
import { useEffect, useState } from 'react'

interface Props {
  title: string
  text: string
}

const QuestionCard = ({ title, text }: Props) => {
  const [show, setShow] = useState(false)
  const [styles, setStyles] = useState('')

  const handleClick = () => setShow(!show)

  const toggleArrow = () => {
    if (show) setStyles('--active')
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
