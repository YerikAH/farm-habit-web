import styled from 'styled-components'
import { MainCenterGlobal, SectionCenterGlobal } from '../global/global'

export const MainStyles = styled.main`
  ${MainCenterGlobal}
  position: relative;
`
export const SectionWork = styled.section`
  ${SectionCenterGlobal}
  margin: 10rem 0;
  padding: 5rem 2rem;
  position: relative;
`
export const HeadlinePrincipal = styled.h1`
  letter-spacing: 0.05em;
  font: normal normal 900 2.5rem/3rem var(--font-primary);
  color: var(--black-100);
  text-align: center;
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

export const BoxDecoration = styled.div``
export const IconAnimation = styled.div``
