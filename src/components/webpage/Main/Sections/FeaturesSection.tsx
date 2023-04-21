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
          Nuestra plataforma cuenta con una variedad de características y herramientas para
          motivarte y mantener un seguimiento de tus hábitos diarios. Descubre cómo nuestra app
          puede ayudarte a establecer hábitos saludables y a mejorar tu bienestar general.
        </style.TextBodyOne>
        <FeaturesSwitch />
      </style.FeaturesBackground>
    </style.FeaturesStyle>
  )
}
