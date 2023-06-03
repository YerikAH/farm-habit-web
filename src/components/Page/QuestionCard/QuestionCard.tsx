import { IconChevronDown } from '@tabler/icons-react'
import { QuestionCardProps } from './props'
import s from './question_card.module.css'
import { useEffect, useRef, useState } from 'react'
const QuestionCard = ({ title, text }: QuestionCardProps) => {
  const [style, setStyle] = useState({})
  const [show, setShow] = useState(false)
  const fatherElement = useRef<HTMLDivElement | null>(null)
  const textElement = useRef<HTMLDivElement | null>(null)

  const handleClick = () => setShow(!show)

  useEffect(() => {
    const textHeight = textElement.current?.clientHeight ?? 0
    const fatherHeigth = fatherElement.current?.clientHeight ?? 0
    const difference = fatherHeigth - textHeight
    const heightStyle = {
      height: `${difference}px`,
    }
    if (show) return setStyle(heightStyle)
    setStyle({})
  }, [show])

  return (
    <div className={s.card} style={style}>
      <div className={s.card_title}>
        <h6>{title}</h6>
        <button onClick={handleClick}>
          <IconChevronDown />
        </button>
      </div>
      <div ref={textElement}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default QuestionCard
