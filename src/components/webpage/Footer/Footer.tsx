import * as style from '../../../styles/webpage/footer/footer'
import IconGithub from '../../images/IconGithub'
import LogoWhite from '../../images/LogoWhite'

const Footer = () => {
  return (
    <style.FooterStyles>
      <style.FooterStylesOne>
        <style.CircleDecorationThree/>
        <style.CircleDecorationOne />
        <style.FooterStylesBox>
          <style.CircleDecorationTwo/>
          <style.CircleDecoration />
          <style.FooterLogoWhite>
            <LogoWhite />
          </style.FooterLogoWhite>
          <style.FooterTextOne>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat mi, tincidunt vitae
            risus sit amet, ultricies pretium ante. Curabitur eu lacinia augue. Aenean id fringilla
            ex, ac aliquet ligula.
          </style.FooterTextOne>
        </style.FooterStylesBox>
      </style.FooterStylesOne>
      <style.FooterStylesTwo>
        <IconGithub />
        <style.FooterTextTwo>Farm Habit © 2023</style.FooterTextTwo>
      </style.FooterStylesTwo>
    </style.FooterStyles>
  )
}

export default Footer
