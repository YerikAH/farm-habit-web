import styled, {css} from 'styled-components'


const buttonDefault = css`
  padding: 0.9rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: var(--black-100);
  font: normal normal 600 0.9rem/1rem var(--font-primary);
`

export const OptionsNavStyles = styled.nav`
  display: grid;
  gap: 2rem;
  padding: 3rem 2rem;
`
export const ButtonOptionsBox = styled.div`
  display: grid;
  gap: 1.18rem;
`
export const ButtonPage = styled.button`
  ${buttonDefault}
  background-color: ${props => props.className === 'true' ? 'var()':'var()' }
`
export const TitleOptions = styled.h3`
  font: normal normal 800 1.1rem/1.2rem var(--font-primary);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: var(--black-100);
`
export const ButtonExtra = styled.button`
  ${buttonDefault}
  background-color: transparent;
`
