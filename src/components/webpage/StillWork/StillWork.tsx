import { IconArrowBack } from '@tabler/icons-react'

import * as style from '../../../styles/still_work/still_work'
import Navigation from '../Nav/Navigation'
import SampleFooter from '../Footer/sections/SampleFooter'
import DecorationWork from './ui/DecorationWork'
import { CircleDecoration } from '../../../styles/webpage/main/sections/hero'
import { PathRoutes } from '../../../enum/enum'

const StillWork = () => {
  return (
    <>
      <Navigation />
      <style.MainStyles>
        <CircleDecoration className='left' />
        <CircleDecoration />
        <style.SectionWork>
          <DecorationWork />
          <style.HeadlinePrincipal>ESTAMOS TRABAJANDO</style.HeadlinePrincipal>
          <style.TextBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat mi, tincidunt vitae
            risus sit amet, ultricies pretium ante. Curabitur eu lacinia augue. Aenean id fringilla
            ex, ac aliquet ligula.
          </style.TextBody>
          <style.ButtonComeBack to={PathRoutes.webpage}>
            Volver atras <IconArrowBack color='#FFF' />
          </style.ButtonComeBack>
        </style.SectionWork>
      </style.MainStyles>
      <SampleFooter />
    </>
  )
}

export default StillWork
