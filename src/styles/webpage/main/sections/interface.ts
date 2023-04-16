import styled from 'styled-components'
import {
  HeadlinePrincipalGlobal,
  SectionCenterGlobal,
  TextBodyOneGlobal,
} from '../../../global/global'

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
  overflow: hidden;
  gap: 1rem;
  padding: 0 2rem;
  transition: 0.3s;
  @media (min-width: 1024px) {
    gap: 2rem;
  }
  & div {
    display: flex;
    width: 100%;
    transition: 0.3s;
  }
  @media (min-width: 630px) {
    & div {
      justify-content: center;
      align-items: center;
    }
  }
  @media (min-width: 1024px) {
    & div {
      gap: 2rem;
    }
  }
`
export const ImageResponsive = styled.img`
  object-fit: contain;
  transition: 0.3s;
  margin: 0px auto;
  width: ${(props) =>
    props.className === '2'
      ? '200px'
      : props.className === '1' || props.className === '3'
      ? '175px'
      : '145px'};
  height: ${(props) =>
    props.className === '2'
      ? '430px'
      : props.className === '1' || props.className === '3'
      ? '378px'
      : '313px'};
`
export const ImageBoxResponsive = styled.div`
  height: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  transition: 0.3s;
  background-image: url(${(props) => props.id && `${props.id}`});
  width: ${(props) =>
    props.className === '2'
      ? '200px !important'
      : props.className === '1' || props.className === '3'
      ? '175px !important'
      : '145px !important'};
  height: ${(props) =>
    props.className === '2'
      ? '430px !important'
      : props.className === '1' || props.className === '3'
      ? '378px !important'
      : '313px !important'};
`
