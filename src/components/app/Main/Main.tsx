import * as style from '../../../styles/app/Main/main'
import {GlobalStyles} from '../../../styles/global/global'
import ScreenOne from './Sections/ScreenOne'
import ScreenTwo from './Sections/ScreenTwo'

const Main = () => {
  return (
    <style.MainStyle>
      <GlobalStyles/>
      <style.PlaceSection />
      <ScreenOne />
      <ScreenTwo/>
    </style.MainStyle> 
  )
}

export default Main
