import { InterfaceProps } from './props'
import s from './section_with_description.module.css'

const SectionWithDescription = ({ title, description }: InterfaceProps) => {
  return (
    <>
      <h2 className={s.title}>{title}</h2>
      <p className={s.description}>{description}</p>
    </>
  )
}

export default SectionWithDescription
