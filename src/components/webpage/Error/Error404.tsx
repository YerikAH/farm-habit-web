import { IconArrowBack } from '@tabler/icons-react'
import * as style from '../../../styles/error/error'
import Navigation from '../Nav/Navigation'
import SampleFooter from '../Footer/sections/SampleFooter'
import DecorationCloud from './ui/DecorationCloud'
import { PathRoutes } from '../../../enum/enum'

const Error404 = () => {
  return (
    <>
      <Navigation />
      <style.MainError>
        <DecorationCloud />
        <style.SectionError>
          <style.HeadlineError>
            Error <style.HeadlineErrorJust>404</style.HeadlineErrorJust>
          </style.HeadlineError>
          <style.TextError>
            Lo sentimos, la página que estás buscando no se encuentra disponible. El error 404
            indica que la URL ingresada no es válida o que la página ha sido eliminada o movida. Por
            favor, verifica la dirección web e intenta nuevamente.
          </style.TextError>
          <style.ButtonComeBack to={PathRoutes.webpage}>
            Volver atras
            <IconArrowBack color='#FFF' />
          </style.ButtonComeBack>
        </style.SectionError>
      </style.MainError>
      <SampleFooter />
    </>
  )
}

export default Error404
