import { IconArrowBack } from '@tabler/icons-react'
import { ButtonComeBack } from '../../../styles/error/error'
import * as style from '../../../styles/still_work/still_work'
import Navigation from '../Nav/Navigation'
import SampleFooter from '../Footer/sections/SampleFooter'
import DecorationWork from './ui/DecorationWork'

const StillWork = () => {
  return (
    <>
      <Navigation />
      <style.MainStyles>
        <style.SectionWork>
          <DecorationWork />
          <style.HeadlinePrincipal>ESTAMOS TRABAJANDO</style.HeadlinePrincipal>
          <style.TextBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat mi, tincidunt vitae
            risus sit amet, ultricies pretium ante. Curabitur eu lacinia augue. Aenean id fringilla
            ex, ac aliquet ligula.
          </style.TextBody>
          <ButtonComeBack>
            Volver atras <IconArrowBack color='#FFF' />
          </ButtonComeBack>
        </style.SectionWork>
      </style.MainStyles>
      <SampleFooter />
    </>
  )
}

export default StillWork
