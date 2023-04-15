import * as style from '../../../../styles/webpage/main/sections/interface'
import appFive from '../../../../assets/app_5.png'
import appFour from '../../../../assets/app_4.png'
import appThree from '../../../../assets/app_3.png'
import appTwo from '../../../../assets/app_2.png'
import appOne from '../../../../assets/app_1.png'


const KnowInterface = () => {
  return (
    <style.KnowInterfaceStyle id='know'>
      <style.HeadlinePrincipal>
        ¡Conoce la interfaz de la app FarmHabit para lograr tus metas!
      </style.HeadlinePrincipal>
      <style.TextBodyOne>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat mi, tincidunt vitae
        risus sit amet, ultricies pretium ante. Curabitur eu lacinia augue. Aenean id fringilla ex,
        ac aliquet ligula.
      </style.TextBodyOne>
      <style.BoxImages>
        <style.ImageResponsive src={appFive} alt='app preview'/>
        <style.ImageResponsive src={appFour} alt='app preview'  className='tablet'/>
        <style.ImageResponsive src={appOne} alt='app preview' className='mobile'/>
        <style.ImageResponsive src={appTwo} alt='app preview'  className='tablet'/>
        <style.ImageResponsive src={appThree} alt='app preview'/>
      </style.BoxImages>
    </style.KnowInterfaceStyle>
  )
}

export default KnowInterface
