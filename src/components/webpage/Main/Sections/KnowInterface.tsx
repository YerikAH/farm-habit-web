import useWidth from '../../../../hook/useWidth'
import * as style from '../../../../styles/webpage/main/sections/interface'
import ImagesDrop from './ui/ImagesDrop'
import ImagesSlider from './ui/ImagesSlider'

const KnowInterface = () => {
  const { renderImages } = useWidth(630)
  return (
    <style.KnowInterfaceStyle id='know'>
      <style.HeadlinePrincipal>
        ¡Conoce la interfaz de la app FarmHabit para lograr tus metas!
      </style.HeadlinePrincipal>
      <style.TextBodyOne>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat mi, tincidunt vitae
        risus sit amet, ultricies pretium ante. Curabitur eu lacinia augue. Aenean id fringilla ex,
        ac aliquet ligula.
      </style.TextBodyOne>
      <style.BoxImages>{renderImages ? <ImagesDrop /> : <ImagesSlider />}</style.BoxImages>
    </style.KnowInterfaceStyle>
  )
}

export default KnowInterface
