import * as style from '../../../styles/app/Main/main'
import {GlobalStyles} from '../../../styles/global/global'
import ScreenOne from './Sections/ScreenOne'

const Main = () => {
  return (
    <style.MainStyle>
      <GlobalStyles/>
      <style.PlaceSection />
      <ScreenOne />
    </style.MainStyle> 
  )
}

export default Main
