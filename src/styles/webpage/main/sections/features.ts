import styled from 'styled-components'
import {
  HeadlinePrincipalGlobal,
  SectionCenterGlobal,
  TextBodyOneGlobal,
} from '../../global/global'

export const FeaturesStyle = styled.section`
  margin-top: 5rem;
  background-color: var(--black-10);
  width: 100%;
  padding: 5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    padding: 5rem;
    
  }
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

export const FeaturesGrid = styled.div`
  display: grid;
  max-width: 55rem;
  width: 100%;
  margin-top: 3rem;
  place-items: center;
  @media (min-width: 900px) {
    grid-template-columns: auto auto;
    
  }
`

export const FeaturesGridOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FeaturesGridTwo = styled.div`
  display: grid;
  place-items: start;
  max-width: 23.75rem;
  width: 100%;
  height: 100%;
  margin-top: 4rem;
  @media (min-width: 900px)  {
    margin-top: 0;
    
  }
`

export const ImageResponsive = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 20.25rem;
`
export const ButtonOption = styled.button`
  width: 100%;
  border-radius: 1rem;
  border: none;
  background-color:${(props) => (props.className === 'true' ? 'var(--blue-5)' : 'transparent')};
  padding: 1rem;
  text-align: left;
`
export const ButtonSpace = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Description = styled.p`
  font: normal normal 400 0.8rem/1rem var(--font-primary);
  color: var(--blue);
  text-align: left;
  margin-top: 0.5rem;
`

export const ButtonOptionTitle = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const ButtonTitle = styled.p`
  font: normal normal 700 1rem/1.5rem var(--font-primary);
  color: ${(props) => (props.className === 'true' ? 'var(--blue)' : 'var(--black-100)')};
  text-align: left;
  white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
max-width: 12rem;
@media (min-width: 370px) {
  max-width: 17rem;
    
  }
`
