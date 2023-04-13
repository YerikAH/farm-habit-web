import styled from 'styled-components';
import { HeadlinePrincipalGlobal, SectionCenterGlobal, TextBodyOneGlobal } from '../../global/global';

export const FeaturesStyle = styled.section`
margin-top: 5rem;
background-color: var(--black-10);
width: 100%;
padding: 5rem;
display: flex;
justify-content: center;
align-items: center;
`
export const FeaturesBackground = styled.div`
  ${SectionCenterGlobal};
`
export const HeadlinePrincipal = styled.h2`
  ${HeadlinePrincipalGlobal}
  padding: 0 2rem;
  max-width: 50rem;
`
export const TextBodyOne = styled.p`
  ${TextBodyOneGlobal}
  padding: 0 2rem;
  max-width: 50rem;
`

export const FeaturesGrid =styled.div`
  display: grid;
  grid-template-columns: auto auto;
  max-width: 55rem;
  place-items: center;
`

export const FeaturesGridOne =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FeaturesGridTwo = styled.div`
  display: grid;
  place-items: center;
  max-width: 23.75rem;
  width: 100%;
`

export const ImageResponsive = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 20.25rem;
`
export const ButtonOption = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`
export const ButtonOptionTitle = styled.div`
  display: flex;
  gap:0.5rem;
`
export const ButtonTitlw = styled.p`
  font: normal normal 1rem/1.5rem var(--font-primary);
`
