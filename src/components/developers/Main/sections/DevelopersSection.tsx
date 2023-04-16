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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat mi, tincidunt vitae
          risus sit amet, ultricies pretium ante. Curabitur eu lacinia augue. Aenean id fringilla
          ex, ac aliquet ligula.
        </style.TextBodyOne>
        <CardDevelopers/>
    </style.DevelopersSectionStyles>
  )
}

export default DevelopersSection
