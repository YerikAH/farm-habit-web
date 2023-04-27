import { createGlobalStyle, css } from 'styled-components'



export const GlobalStyles = createGlobalStyle`
  body {
    overflow: hidden;
  }
`

export const HeadlinePrincipalGlobal = css`
  font: normal normal 900 1.5rem/2rem var(--font-primary);
  color: var(--black-100);
  text-align: center;
  @media (min-width: 720px) {
    font: normal normal 900 2.5rem/3rem var(--font-primary);
  }
`
export const TextBodyOneGlobal = css`
  font: normal normal 400 0.8rem/1rem var(--font-primary);
  color: var(--black-70);
  text-align: center;
  margin-top: 2rem;
  @media (min-width: 720px) {
    font: normal normal 400 1.2rem/1.5rem var(--font-primary);
  }
`
export const SectionCenterGlobal = css`
  width: 100%;
  max-width: 1200px;
  display: grid;
  place-items: center;
`
export const MainCenterGlobal = css`
  width: 100vw;
  display: grid;
  place-items: center;
`
