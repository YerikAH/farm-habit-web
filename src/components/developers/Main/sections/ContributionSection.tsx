import { GITHUB_LINK } from '../../../../constant/linkApp'
import * as style from '../../../../styles/developers/main/sections/contribution'
import FormContribution from './ui/FormContribution'

const ContributionSection = () => {
  return (
    <style.ContributionSectionStyles>
      <style.ContributionSectionBackground></style.ContributionSectionBackground>
      <style.ContributionBackgroundBlur></style.ContributionBackgroundBlur>
      <style.ContributionSectionContent>
        <style.HeadlinePrincipal>¡Contribuye con nosotros!</style.HeadlinePrincipal>
        <style.TextBodyOne>
          ¡Únete a nuestro equipo en Farm Habit! Si eres una persona apasionada por la salud y el
          bienestar, te invitamos a ser parte de nuestro proyecto para ayudar a más personas a
          construir hábitos saludables. ¡Tu aporte puede hacer una gran diferencia!
        </style.TextBodyOne>
        <FormContribution />
        <style.TextBodyOne>
          También puedes contribuir a nuestro proyecto en GitHub.{' '}
          <style.TextLinkOne href={GITHUB_LINK}>Haz clic aquí</style.TextLinkOne> para acceder a
          nuestro repositorio
        </style.TextBodyOne>
      </style.ContributionSectionContent>
    </style.ContributionSectionStyles>
  )
}

export default ContributionSection
