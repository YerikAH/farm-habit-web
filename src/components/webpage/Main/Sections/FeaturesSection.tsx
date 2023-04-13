import * as style from '../../../../styles/webpage/main/sections/features'

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
        <style.FeaturesGrid>
          <style.FeaturesGridOne>
            <style.ImageResponsive src='' alt='feature app' />
          </style.FeaturesGridOne>
          <style.FeaturesGridTwo>
            <style.ButtonOption>
              <style.ButtonOptionTitle>
                <style.ButtonTitle>Obtén un resumen de tus hábitos</style.ButtonTitle>
              </style.ButtonOptionTitle>
            </style.ButtonOption>
          </style.FeaturesGridTwo>
        </style.FeaturesGrid>
      </style.FeaturesBackground>
    </style.FeaturesStyle>
  )
}
