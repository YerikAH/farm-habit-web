import s from './question_section.module.css'

const QuestionSection = () => {
  return (
    <section className={s.section}>
      <h2>Preguntas Frecuentes</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat mi, tincidunt vitae
        risus sit amet, ultricies pretium ante.{' '}
      </p>
      <div className={s.section_question}></div>
    </section>
  )
}

export default QuestionSection
