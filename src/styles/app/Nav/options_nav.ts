import styled, {css} from 'styled-components'


const buttonDefault = css`
  padding: 0.7rem 2rem;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  border: none;
  background-color: transparent;
  color: var(--black-100);
  font: normal normal 600 0.9rem/1rem var(--font-primary);
  border-radius: 0.9rem;
`

export const OptionsNavStyles = styled.nav`
  display: grid;
  gap: 2rem;
  padding:  1.5rem 2rem 3rem 2rem;
  margin-top: 1.5rem;
  position: absolute;
  left: 0;
  max-width: 18.75rem;
  width: 100%;
  overflow: auto;
  background-color: var(--white);
  place-content: start;
  height: 90vh;
`
export const ButtonOptionsBox = styled.div`
  display: grid;
  gap: 0.7rem;
`
export const ButtonPage = styled.button`
  ${buttonDefault}
  background-color: ${props => props.className === 'true' ? 'var(--blue)':'var(--black-10)' };
  color: ${props => props.className === 'true' ? 'var(--white)':'var(--black-100)' }
`
export const TitleOptions = styled.h3`
  font: normal normal 800 0.8rem/1.2rem var(--font-primary);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  padding: 0 0.5rem;
  color: var(--black-100);
`
export const ButtonExtra = styled.button`
  ${buttonDefault}
  background-color: transparent;
`
