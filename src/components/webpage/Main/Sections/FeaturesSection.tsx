import * as style from '../../../../styles/webpage/main/sections/features'
import FeaturesSwitch from './ui/FeaturesSwitch'

export const FeaturesSection = () => {
  return (
    <style.FeaturesStyle>
      <style.FeaturesBackground>
        <style.HeadlinePrincipal>
          Desarrolla hábitos saludables con nuestras herramientas
        </style.HeadlinePrincipal>
        <style.TextBodyOne>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat mi, tincidunt vitae
          risus sit amet, ultricies pretium ante. Curabitur eu lacinia augue. Aenean id fringilla
          ex, ac aliquet ligula.
        </style.TextBodyOne>
        <FeaturesSwitch/>
      </style.FeaturesBackground>
    </style.FeaturesStyle>
  )
}
