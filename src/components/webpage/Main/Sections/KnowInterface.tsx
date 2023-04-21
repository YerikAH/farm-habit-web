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
        ¿Quieres mejorar tu estilo de vida y alcanzar tus objetivos de manera más efectiva? ¡La app
        FarmHabit es tu solución! Nuestra plataforma te ofrece una interfaz innovadora y fácil de
        usar para establecer hábitos saludables y mantener un seguimiento de tu progreso.
      </style.TextBodyOne>
      <style.BoxImages>{renderImages ? <ImagesDrop /> : <ImagesSlider />}</style.BoxImages>
    </style.KnowInterfaceStyle>
  )
}

export default KnowInterface
