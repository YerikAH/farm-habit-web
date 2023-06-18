import s from './section_with_description.module.css'

interface Props {
  title: string
  description: string
}

const SectionWithDescription = ({ title, description }: Props) => {
  return (
    <>
      <h2 className={s.title}>{title}</h2>
      <p className={s.description}>{description}</p>
    </>
  )
}

export default SectionWithDescription
