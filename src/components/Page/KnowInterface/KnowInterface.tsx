import useWidth from '../../../hook/useWidth'
import ImagesDrop from '../ImagesDrop/ImagesDrop'
import ImagesSlider from '../ImagesSlider/ImagesSlider'
import { TEXT, TITLE } from './know_interface'
import s from './know_interface.module.css'

const KnowInterface = () => {
  const { renderImages } = useWidth(630)
  return (
    <section className={s.section} id='know'>
      <h2 className={s.section_title}>{TITLE}</h2>
      <p className={s.section_text}>{TEXT}</p>
      <div className={s.section_box}>{renderImages ? <ImagesDrop /> : <ImagesSlider />}</div>
    </section>
  )
}

export default KnowInterface
