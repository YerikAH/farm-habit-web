import styled, { css } from 'styled-components'
import { SectionCenterGlobal } from '../../global/global'
const text = css`
  font: normal normal 400 0.8rem/1rem var(--font-primary);
  text-align: center;
  margin-top: 2rem;
  @media (min-width: 720px) {
    font: normal normal 400 1rem/1.2rem var(--font-primary);
  }
`
const circle = css`
  position: absolute;
  background-color: transparent;
  border: 0.7rem solid var(--white);
  border-radius: 15rem;
  opacity: 0.3;
`

export const FooterStyles = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const FooterStylesOne = styled.div`
  width: 100%;
  background-color: var(--black-100);
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
`
export const FooterStylesBox = styled.div`
  position: relative;
  overflow: hidden;
  ${SectionCenterGlobal}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 1rem;
`
export const FooterLogoWhite = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FooterTextOne = styled.p`
  ${text}
  color: var(--white);
  max-width: 21.875rem;
  width: 100%;
  text-align: justify;
`
export const FooterStylesTwo = styled.div`
  ${SectionCenterGlobal}
  display: grid;
  margin: 2rem 1rem;
  place-items: center;
`
export const FooterTextTwo = styled.p`
  ${text}
  color: var(--black-100);
  margin-top: 1rem;
  font-weight: 600 !important;
`
export const CircleDecoration = styled.div`
  top: -9rem;
  left: 16rem;
  width: 200px;
  height: 200px;
  ${circle}
`

export const CircleDecorationOne = styled.div`
${circle}
  top: -10rem;
  right: -10rem;
  width: 350px;
  height: 350px;
`

export const CircleDecorationTwo = styled.div`
${circle}
  bottom: -20rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 400px;
  height: 400px;
`
export const CircleDecorationThree = styled.div`
${circle}
  bottom: -10rem;
  left: -10rem;
  width: 350px;
  height: 350px;
`