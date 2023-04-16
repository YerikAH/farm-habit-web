import * as style from '../../../../styles/developers/main/sections/developers'
import { CircleDecoration } from '../../../../styles/webpage/main/sections/hero'
import IconGithub from '../../../images/IconGithub'
import IconLinkedin from '../../../images/IconLinkedin'

const DEVELOPER_LIST = [
  {
    id: 0,
    image: '',
    name: 'Harvey Yerik',
    job: 'Desarrollador Front End',
    linkedin: '',
    github: '',
  },
  {
    id: 1,
    image: '',
    name: 'Harvey Yerik',
    job: 'Desarrollador Front End',
    linkedin: '',
    github: '',
  },
  {
    id: 2,
    image: '',
    name: 'Harvey Yerik',
    job: 'Desarrollador Front End',
    linkedin: '',
    github: '',
  },
]
const DevelopersSection = () => {
  return (
    <style.DevelopersSectionStyles>
      <CircleDecoration className='left' />
      <CircleDecoration />
      <style.HeadlinePrincipal>Desarrolladores</style.HeadlinePrincipal>
      <style.DevelopersBox>
        {DEVELOPER_LIST.map((item) => (
          <style.DeveloperInfo key={item.id}>
            <style.DeveloperImage
              src='https://images.ecestaticos.com/vTc4g_7xb_nSqbTMm7KY0HYv0Yk=/119x87:4983x3534/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F542%2F18c%2F2b9%2F54218c2b95445ae1fea91aca9e37b53e.jpg'
              alt='developer photo'
            />
            <style.DeveloperName>{item.name}</style.DeveloperName>
            <style.DeveloperDescription>{item.job}</style.DeveloperDescription>
            <style.DeveloperBoxButtons>
              <style.DeveloperIconButton
                href=''
                target='_blank'
                tabIndex={1}
              >
                <IconLinkedin/>  

              </style.DeveloperIconButton>
              <style.DeveloperIconButton
                href=''
                target='_blank'
                tabIndex={1}
              >   
                <IconGithub/>

              </style.DeveloperIconButton>
            </style.DeveloperBoxButtons>
          </style.DeveloperInfo>
        ))}
      </style.DevelopersBox>
    </style.DevelopersSectionStyles>
  )
}

export default DevelopersSection
