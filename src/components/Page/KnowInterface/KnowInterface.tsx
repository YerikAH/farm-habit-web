import useWidth from '../../../hook/useWidth'
import ImagesDrop from '../ImagesDrop/ImagesDrop'
import ImagesSlider from '../ImagesSlider/ImagesSlider'
import SectionWithDescription from '../shared/SectionWithDescription/SectionWithDescription'
import { TEXT, TITLE } from './know_interface'
import s from './know_interface.module.css'

const KnowInterface = () => {
  const { renderImages } = useWidth(900)
  return (
    <section className={s.section} id='know'>
      <SectionWithDescription title={TITLE} description={TEXT} />
      <div className={s.section_box}>{renderImages ? <ImagesDrop /> : <ImagesSlider />}</div>
    </section>
  )
}

export default KnowInterface
