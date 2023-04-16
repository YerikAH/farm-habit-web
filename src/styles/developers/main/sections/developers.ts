import styled from 'styled-components'
import { HeadlinePrincipalGlobal, SectionCenterGlobal, TextBodyOneGlobal } from '../../../global/global'

export const DevelopersSectionStyles = styled.section`
  ${SectionCenterGlobal}
  padding: 5rem 2rem;
  position: relative;
  margin: 7rem auto;
`
export const HeadlinePrincipal = styled.h1`
  ${HeadlinePrincipalGlobal}
  padding: 0 2rem;
  max-width: 50rem;
`
export const TextBodyOne = styled.p`
  ${TextBodyOneGlobal}
  padding: 0 2rem;
  max-width: 50rem;
`
export const DevelopersBox = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, 9.375rem);
  gap: 9rem;
  place-items: center;
  place-content: center;
  margin-top: 6rem;
`
export const DeveloperInfo = styled.div`
  display: grid;
  position: relative;
  overflow: hidden;
  place-content: center;
  place-items: center;
`
export const DeveloperImage = styled.img`
  border-radius: 15rem;
  max-width: 9.375rem;
  height: auto;
  object-fit: cover;
`
export const DeveloperName = styled.p`
  font: normal normal 700 1rem/1.2rem var(--font-primary);
  color: var(--black-100);
  text-align: center;
  margin-top: 1.5rem;
`
export const DeveloperDescription = styled.p`
  font: normal normal 400 0.8rem/1rem var(--font-primary);
  color: var(--black-70);
  text-align: center;
  margin-top: 0.5rem;
`

export const DeveloperBoxButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;
`
export const DeveloperIconButton = styled.a``
