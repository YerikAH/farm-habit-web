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
            Estamos trabajando arduamente en nuestra aplicación web para brindarte una experiencia
            en línea de calidad. Próximamente podrás disfrutar de una interfaz más intuitiva,
            funciones mejoradas y un acceso fácil y rápido a nuestros servicios.
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
