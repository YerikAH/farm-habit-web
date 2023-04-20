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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat mi, tincidunt vitae
            risus sit amet, ultricies pretium ante. Curabitur eu lacinia augue. Aenean id fringilla
            ex, ac aliquet ligula.
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
