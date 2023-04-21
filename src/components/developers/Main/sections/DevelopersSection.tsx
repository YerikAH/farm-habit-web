import * as style from '../../../../styles/developers/main/sections/developers'
import { CircleDecoration } from '../../../../styles/webpage/main/sections/hero'
import CardDevelopers from './ui/CardDevelopers'

const DevelopersSection = () => {
  return (
    <style.DevelopersSectionStyles>
      <CircleDecoration className='left' />
      <CircleDecoration />
      <style.HeadlinePrincipal>Desarrolladores</style.HeadlinePrincipal>
      <style.TextBodyOne>
        En nuestro equipo de desarrolladores, combinamos habilidades técnicas y creativas para
        construir aplicaciones innovadoras que satisfacen las necesidades de nuestros usuarios.
      </style.TextBodyOne>
      <CardDevelopers />
    </style.DevelopersSectionStyles>
  )
}

export default DevelopersSection
