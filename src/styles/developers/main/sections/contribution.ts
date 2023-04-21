import styled from 'styled-components'
import {
  HeadlinePrincipalGlobal,
  SectionCenterGlobal,
  TextBodyOneGlobal,
} from '../../../global/global'
import image from '../../../../assets/bg_contribution.png'

export const ContributionSectionStyles = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  margin: 10rem 0 0 0;
  flex-direction: column;
  & div {
    width: 100%;
  }
`
export const ContributionBackgroundBlur = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(54, 61, 79, 0.7);
  backdrop-filter: blur(1px);
`
export const ContributionSectionBackground = styled.div`
  position: absolute;
  top: auto;
  left: 0;
  transform: translateZ(-1px) scale(1.5);
  background-size: 100%;
  z-index: -1;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`
export const ContributionSectionContent = styled.div`
  ${SectionCenterGlobal}
  padding: 10rem 0;
  position: relative;
  z-index: 100;
`
export const HeadlinePrincipal = styled.h2`
  ${HeadlinePrincipalGlobal}
  color: var(--white);
  padding: 0 2rem;
  max-width: 50rem;
`
export const TextBodyOne = styled.p`
  ${TextBodyOneGlobal}
  color: var(--white);
  padding: 0 2rem;
  max-width: 50rem;
  opacity: 0.7;
`
export const ContributionForm = styled.form`
  gap: 1rem;
  flex-direction: column;
  max-width: 40.375rem;
  width: 100%;
  margin: 4rem auto 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0px 2rem;
  @media (min-width: 720px) {
    flex-direction: row;
    padding: 0;
  }
`
export const ContributionInput = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: var(--white);
  font: normal normal 400 0.8rem/1rem var(--font-primary);
  padding: 0.5rem 2rem;
  flex: 2;
  width: 100%;
  @media (min-width: 720px) {
    font: normal normal 400 1rem/1.5rem var(--font-primary);
  }
`
export const ContributionButton = styled.button`
  width: 100%;
  background: var(--blue);
  border-radius: 8px;
  font: normal normal 400 0.8rem/1rem var(--font-primary);
  color: var(--black-100);
  text-align: center;
  border: none;
  padding: 0.5rem 3rem;
  @media (min-width: 720px) {
    width: auto;
    font: normal normal 400 1rem/1.5rem var(--font-primary);
  }
`
export const ErrorForm = styled.span`
  position: absolute;
  bottom: -1.5rem;
  font: normal italic 500 0.9rem/1.2rem var(--font-primary);
  left: 0;
  color: var(--red);
`
export const TextLinkOne = styled.a`
  ${TextBodyOneGlobal}
  color: var(--blue);
  text-decoration: underline;
`
