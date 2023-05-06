import styled from 'styled-components'

export const AdEdModal = styled.div`
  background-color: #fff1;
  position: fixed;
  overflow: auto;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  place-content: center;
  z-index: 200;	
`
export const Modal = styled.div`
  background-color: var(--white-80); 
  border-radius: 1.25rem;
  backdrop-filter: blur(25px);
  width: 100%;
  max-width: 31.25rem;
  display: flex;
  position: relative;
`
export const ButtonClose = styled.button`
  position: absolute;
  border: none;
  background: transparent;
  border-radius: 2rem;
  display: grid;
  place-items: center;
  place-content: center;
  top: 0;
  left: 0;
  margin: 1rem;
`
export const HeadlinePrincipal = styled.h3`
  font: normal normal 600 1.2rem/1.5rem var(--font-primary);
  color: var(--black-100);
`
export const BoxForm = styled.form`
  display: grid;
  place-items: start; 
  @media (min-width: 720px){
    grid-template-columns: repeat(2, 50%);
  }
`

export const LabelForm = styled.label`
  font: normal normal 500 0.8em/1.2rem var(--font-primary);
  color: var(--black-100);
  margin-bottom: 0.5rem
`
export const InputForm = styled.input`
  font: normal normal 400 0.8rem/1.2rem var(--font-primary);
  color: var(--black-100);
  padding: 0.5rem 1rem;
  border: 1px solid var(--black-10)
  background: transparent;
  border-radius: 0.2rem;
`
export const ButtonSelect = styled.button`
  border-radius: 2rem;
  font: normal normal 400 0.8rem/1rem var(--font-primary);
  border: 1px solid var(--black-10);
  width: 1rem;
  height: 1rem;
  background: ${props => props.className === 'true' ? 'var(--blue)': 'transparent'};
  color: ${props => props.className === 'true' ? 'var(--white)': 'var(--black-50)'}
`
export const BoxFormDiv = styled.div``
export const BoxButtonSelect = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: start;
  align-items: center;
`
export const SelectOption = styled.button`
  position: relative;
  border: 1px solid var(--black-10)
  background: transparent;
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  font: normal normal 400 0.8rem/1.2rem var(--font-primary);
  color: var(--black-100);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`
export const BoxButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
`

