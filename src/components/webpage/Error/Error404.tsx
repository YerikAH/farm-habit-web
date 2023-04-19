import { IconArrowBack } from '@tabler/icons-react'
import * as style from '../../../styles/error/error'
import { Navigation } from '../Nav/Navigation'
import SampleFooter from '../Footer/sections/SampleFooter'
import { CircleDecoration } from '../../../styles/webpage/main/sections/hero'

const Error404 = () => {
  return (
    <>
      <Navigation />
      <style.MainError>
        <style.CloudBaseBig id='left' className='-7rem'  style={{bottom:'-25rem'}} />
        <style.CloudBase id='left' className='-5rem'  style={{bottom:'15rem'}} />
        <style.CloudBase id='left' className='-7rem'  style={{bottom:'-5rem'}} />
        <style.CloudBase id='left' className='-10rem'  style={{bottom:'-25rem'}} />

        <style.CloudBaseBig id='right' className='-7rem'  style={{bottom:'-15rem'}} />
        <style.CloudBase id='right'  className='-2rem' style={{bottom:'15rem'}} />
        <style.CloudBase id='right'  className='-7rem' style={{bottom:'-20rem'}} />
        <CircleDecoration className='left' />
        <CircleDecoration />
        <style.SectionError>
          <style.HeadlineError>
            Error <style.HeadlineErrorJust>404</style.HeadlineErrorJust>
          </style.HeadlineError>
          <style.TextError>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat mi, tincidunt vitae
            risus sit amet, ultricies pretium ante. Curabitur eu lacinia augue. Aenean id fringilla
            ex, ac aliquet ligula.
          </style.TextError>
          <style.ButtonComeBack>
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
