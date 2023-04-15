import { IconChevronDown, IconDownload } from '@tabler/icons-react'
import * as style from '../../../../styles/webpage/main/sections/hero'

const HeroSection = () => {
  return (
    <style.SectionHeroSection>
      <style.CircleDecoration className='left' />
      <style.CircleDecoration />
      <style.HeadlinePrincipal>
        Cultiva un nuevo
        <br />
        <style.HeadlineSpecial>hábito</style.HeadlineSpecial>
      </style.HeadlinePrincipal>
      <style.TextBodyPrincipal>
        Cada hábito que cultivas es una semilla que plantas para tu futuro
      </style.TextBodyPrincipal>
      <style.ButtonFill>
        <IconDownload color='#FFF' size={20} strokeWidth={2.5}/>
        Descargar
      </style.ButtonFill>
      <style.ButtonLink href='#kow'>
        {' '}
        Conoce la aplicación <IconChevronDown />
      </style.ButtonLink>
    </style.SectionHeroSection>
  )
}

export default HeroSection
