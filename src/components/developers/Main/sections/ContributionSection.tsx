import * as style from '../../../../styles/developers/main/sections/contribution'

const ContributionSection = () => {
  return (
    <style.ContributionSectionStyles>
      <style.ContributionSectionBackground></style.ContributionSectionBackground>
        <style.ContributionBackgroundBlur></style.ContributionBackgroundBlur>
      <style.ContributionSectionContent>
        <style.HeadlinePrincipal>¡Contribuye con nosotros!</style.HeadlinePrincipal>
        <style.TextBodyOne>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat mi, tincidunt vitae
          risus sit amet, ultricies pretium ante. Curabitur eu lacinia augue. Aenean id fringilla
          ex, ac aliquet ligula.
        </style.TextBodyOne>
        <style.ContributionForm>
          <style.ContributionInput placeholder='Ingresa tu email . . .' />
          <style.ContributionButton>Enviar</style.ContributionButton>
        </style.ContributionForm>
        <style.TextBodyOne>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit{' '}
          <style.TextLinkOne>haz click aquí.</style.TextLinkOne>
        </style.TextBodyOne>
      </style.ContributionSectionContent>
    </style.ContributionSectionStyles>
  )
}

export default ContributionSection
