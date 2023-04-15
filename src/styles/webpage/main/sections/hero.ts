import styled, { css } from 'styled-components'
import { SectionCenterGlobal } from '../../global/global'

const headlineCss = css`
  font: normal normal 900 2rem/3rem var(--font-primary);
  color: var(--black-100);
  text-align: center;
  @media (min-width: 460px) {
    font: normal normal 900 3rem/3.5rem var(--font-primary);
  }
  @media (min-width: 720px) {
    font: normal normal 900 4rem/5rem var(--font-primary);
  }
`
export const SectionHeroSection = styled.section`
  ${SectionCenterGlobal}
  margin-top: 7rem;
  padding: 5rem 2rem;
  position: relative;
`

export const HeadlinePrincipal = styled.h1`
  ${headlineCss}
`
export const HeadlineSpecial = styled.h1`
  ${headlineCss}
  background: linear-gradient(270deg, var(--blue-soft) 30.47%, var(--blue) 47.99%, var(--blue-strong) 66.64%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--blue);
`
export const TextBodyPrincipal = styled.p`
  font: normal normal 500 0.8rem/1.5rem var(--font-primary);
  color: var(--black-70);
  text-align: center;
  margin-top: 1rem;
  max-width: 38rem;
  @media (min-width: 460px) {
    font: normal normal 500 1rem/1.5rem var(--font-primary);
    margin-top: 2rem;
  }
  @media (min-width: 720px) {
    font: normal normal 600 1.5rem/2rem var(--font-primary);
  }
`
export const ButtonFill = styled.button`
  background-color: var(--blue);
  font: normal normal 700 0.8rem/1.2rem var(--font-primary);
  color: var(--white);
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  svg {
    scale: 0.9;
  }
  @media (min-width: 460px) {
    font: normal normal 700 1rem/1.2rem var(--font-primary);
    padding: 0.7rem 2.5rem;
    svg {
      scale: 1;
    }
  }
`
export const ButtonLink = styled.a`
  background-color: transparent;
  padding: 0.5rem;
  font: normal normal 600 1rem/1.2rem var(--font-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  gap: 0.5rem;
  color: var(--black-100);
`

export const CircleDecoration = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  position: absolute;
  top: -18.25rem;
  left: ${(props) => (props.className === 'left' ? '0 ' : '100%')};
  box-shadow: 0px 0px 250px 400px rgba(75, 126, 255, 0.1);
`
