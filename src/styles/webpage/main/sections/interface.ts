import styled from 'styled-components'
import {
  HeadlinePrincipalGlobal,
  SectionCenterGlobal,
  TextBodyOneGlobal,
} from '../../global/global'

export const KnowInterfaceStyle = styled.section`
  ${SectionCenterGlobal};
  margin-top: 5rem;
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
export const BoxImages = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  gap: 2rem;
`
export const ImageResponsive = styled.img`
  display: ${(props) => (props.className === 'mobile' ? 'block' : 'none')};
  @media (min-width: 1024px) {
    justify-content: center;
    display: block;
  }
`
