import styled, { css } from 'styled-components'

const buttonDefault = css`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  border: none;
  background-color: transparent;
  color: var(--black-100);
  font: normal normal 600 0.7rem/1rem var(--font-primary);
  border-radius: 0.9rem;
  & svg {
    scale: 0.8;
  }
  @media (min-width: 720px) {
    & svg {
      scale: 1;
    }
    padding: 0.7rem 2rem;
    font: normal normal 600 0.9rem/1rem var(--font-primary);
  }
`

export const OptionsNavStyles = styled.nav`
  display: grid;
  gap: 2rem;
  padding: 1.5rem 2rem 3rem 2rem;
  margin-top: 1.5rem;
  position: absolute;
  left: 0;
  overflow: auto;
  background-color: var(--white);
  place-content: start;
  height: 90vh;
  @media (min-width: 720px) {
    max-width: 18.75rem;
    width: 100%;
  }
`
export const ButtonOptionsBox = styled.div`
  display: grid;
  gap: 0.7rem;
`
export const ButtonPage = styled.button`
  ${buttonDefault}
  background-color: ${(props) => (props.className === 'true' ? 'var(--blue)' : 'var(--black-10)')};
  color: ${(props) => (props.className === 'true' ? 'var(--white)' : 'var(--black-100)')};
`
export const TitleOptions = styled.h3`
  font: normal normal 800 0.6rem/0.8rem var(--font-primary);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  padding: 0 0.5rem;
  color: var(--black-100);
  @media (min-width: 720px) {
    font: normal normal 800 0.8rem/1.2rem var(--font-primary);
  }
`
export const ButtonExtra = styled.button`
  ${buttonDefault}
  background-color: transparent;
  &:hover {
    background-color: var(--black-10);
  }
`
