import QuestionCard from '../QuestionCard/QuestionCard'
import { QUESTIONS } from './question_section'
import s from './question_section.module.css'

const QuestionSection = () => {
  return (
    <section className={s.section}>
      <h2>Preguntas Frecuentes</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat mi, tincidunt vitae
        risus sit amet, ultricies pretium ante.{' '}
      </p>
      <div className={s.section_question}>
        {QUESTIONS.map((item, idx) => (
          <QuestionCard text={item.text} title={item.title} key={idx} />
        ))}
      </div>
    </section>
  )
}

export default QuestionSection
