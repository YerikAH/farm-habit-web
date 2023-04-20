import styled, { css } from 'styled-components'
import { MainCenterGlobal, SectionCenterGlobal } from '../global/global'
import { Link } from 'react-router-dom'

export const MainError = styled.main`
  ${MainCenterGlobal}
  position: relative;
`
export const SectionError = styled.section`
  ${SectionCenterGlobal}
  margin: 10rem 0;
  padding: 5rem 2rem;
  position: relative;
`
export const HeadlineError = styled.h1`
  letter-spacing: 0.05em;
  font: normal normal 900 2.5rem/3rem var(--font-primary);
  color: var(--black-100);
  text-align: center;
  @media (min-width: 720px) {
    font: normal normal 900 4rem/5rem var(--font-primary);
  }
  text-transform: uppercase;
`
export const HeadlineErrorJust = styled.span`
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font: normal normal 900 2.5rem/3rem var(--font-primary);
  color: var(--blue);
  text-decoration: underline;
  @media (min-width: 720px) {
    font: normal normal 900 4rem/5rem var(--font-primary);
  }
`
export const TextError = styled.p`
  font: normal normal 400 0.8rem/1rem var(--font-primary);
  color: var(--black-70);
  text-align: center;
  margin-top: 2rem;
  max-width: 32rem;
  width: 100%;
  @media (min-width: 720px) {
    font: normal normal 400 1rem/1.5rem var(--font-primary);
  }
`
export const ButtonComeBack = styled(Link)`
  background-color: var(--blue);
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  font: normal normal 700 0.8rem/1.2rem var(--font-primary);
  color: var(--white);
  border: none;
  padding: 0.7rem 3rem;
  border-radius: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 4rem;
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
  &:hover {
    background-color: var(--blue-strong);
  }
`

const CloudAnimation = css`
  background: rgba(255, 255, 255, 0.01);
  box-shadow: 0px 0px 15px 15px rgba(0, 0, 0, 0.01);
  backdrop-filter: blur(5px);
  border-radius: 15rem;
  position: absolute;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  @keyframes cloud {
    0% {
      transform: translateX(-25%);
      scale: 1;
    }
    50% {
      transform: none;
      scale: 1.3;
    }
    100% {
      transform: translateX(-25%);
      scale: 1;
    }
  }
  @keyframes cloudRight {
    0% {
      transform: translateX(25%);
      scale: 1;
    }
    50% {
      transform: none;
      scale: 1.3;
    }
    100% {
      transform: translateX(25%);
      scale: 1;
    }
  }
`
export const CloudBase = styled.div`
  ${CloudAnimation}
  left: ${(props) => props.id === 'left' && `${props.className}`};
  right: ${(props) => props.id === 'right' && `${props.className}`};
  top: 0;
  bottom: 0;
  margin: auto 0;
  animation-duration: 8s;
  @media (min-width: 800px) {
    width: 20rem;
    height: 20rem;
    display: block;
  }
`
export const CloudBaseBig = styled.div`
  ${CloudAnimation}
  display: none;
  border-radius: 55rem;
  top: 0;
  bottom: 0;
  left: ${(props) => props.id === 'left' && `${props.className}`};
  right: ${(props) => props.id === 'right' && `${props.className}`};
  margin: auto 0;
  animation-duration: 8s;
  @media (min-width: 800px) {
    width: 30rem;
    height: 30rem;
    display: block;
  }
`
