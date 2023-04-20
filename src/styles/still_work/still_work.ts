import styled, { css } from 'styled-components'
import { MainCenterGlobal, SectionCenterGlobal } from '../global/global'

export const MainStyles = styled.main`
  ${MainCenterGlobal}
  position: relative;
`
export const SectionWork = styled.section`
  ${SectionCenterGlobal}
  margin: 12rem 0 5rem 0;
  padding: 5rem 2rem;
  position: relative;
`
export const HeadlinePrincipal = styled.h1`
  letter-spacing: 0.05em;
  font: normal normal 900 2rem/3rem var(--font-primary);
  color: var(--black-100);
  text-align: center;
  margin-top: 2rem;
  @media (min-width: 720px) {
    font: normal normal 900 4rem/5rem var(--font-primary);
  }
  max-width: 32rem;
  text-transform: uppercase;
`
export const TextBody = styled.p`
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
export const ButtonComeBack = styled.button`
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

export const BoxDecoration = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  scale: 0.8;
  position: relative;
  @media screen and (min-width: 720px) {
    scale: 1;
  }
`
export const BoxDecorationIcons = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  max-width: 23.625rem;
  right: -15px;
`
const animation = css`
  scale: 0.8;
  animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
`
export const IconAnimation = styled.div`
  position: relative;
  top: ${(props) => props.id && `${props.id}rem`};
  left: ${(props) => props.className && `${props.className}rem`};
  animation-name: iconFloat;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  @keyframes iconFloat {
    0% {
      ${animation}
    }
    50% {
      transform: none;
      scale: 1.2;
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    100% {
      ${animation}
    }
  }
`
