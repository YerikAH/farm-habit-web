import { DEVELOPER_LIST } from '../../../../../constant/constant'
import * as style from '../../../../../styles/developers/main/sections/developers'
import IconGithub from '../../../../images/IconGithub'
import IconLinkedin from '../../../../images/IconLinkedin'
const CardDevelopers = () => {
  return (
    <style.DevelopersBox>
      {DEVELOPER_LIST.map((item) => (
        <style.DeveloperInfo key={item.id}>
          <style.DeveloperImage src={item.image} alt='developer photo' />
          <style.DeveloperName>{item.name}</style.DeveloperName>
          <style.DeveloperDescription>{item.job}</style.DeveloperDescription>
          <style.DeveloperBoxButtons>
            <style.DeveloperIconButton href='' target='_blank' tabIndex={1}>
              <IconLinkedin />
            </style.DeveloperIconButton>
            <style.DeveloperIconButton href='' target='_blank' tabIndex={1}>
              <IconGithub />
            </style.DeveloperIconButton>
          </style.DeveloperBoxButtons>
        </style.DeveloperInfo>
      ))}
    </style.DevelopersBox>
  )
}

export default CardDevelopers
