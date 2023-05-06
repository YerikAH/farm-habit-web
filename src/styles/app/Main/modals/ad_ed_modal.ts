import styled from 'styled-components'
import { ButtonAppRepeat } from '../../../global/global'

export const AdEdModal = styled.div`
  background-color: #fff1;
  position: fixed;
  overflow: auto;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  z-index: 1000;
  backdrop-filter: blur(10px);

`
export const Modal = styled.div`
  background-color: var(--white-80);
  border-radius: 1.25rem;
  backdrop-filter: blur(25px);
  width: 100%;
  max-width: 35.25rem;
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 2rem 1.5rem;
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
  right: 0;
  margin: 1.5rem 1rem;
  padding: 0.5rem;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  & svg{
    color: var(--black-100)
  }
  &:hover{
    background: var(--black-10)
  }
`
export const HeadlinePrincipal = styled.h3`
  font: normal normal 700 1.1rem/1.5rem var(--font-primary);
  color: var(--black-100);
  margin-bottom: 1.5rem;
`
export const BoxForm = styled.form`
  display: grid;
  @media (min-width: 720px) {
    grid-template-columns: 60% 34%;
    gap: 6%;
  }
`

export const LabelForm = styled.label`
  font: normal normal 500 0.8em/1.2rem var(--font-primary);
  color: var(--black-100);
  margin-bottom: 0.5rem;
`
export const InputForm = styled.input`
  font: normal normal 400 0.8rem/1.2rem var(--font-primary);
  color: var(--black-100);
  padding: 0.3rem 0.5rem;
  border: 1px solid var(--black-10);
  background: transparent;
  border-radius: 0.2rem;
`
export const ButtonSelect = styled.button`
  border-radius: 2rem;
  font: normal normal 400 0.8rem/1rem var(--font-primary);
  border: 1px solid var(--black-10);
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.className === 'true' ? 'var(--blue)' : 'transparent')};
  color: ${(props) => (props.className === 'true' ? 'var(--white)' : 'var(--black-50)')};
`
export const BoxFormDiv = styled.div``
export const BoxButtonSelect = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
`
export const BoxLabelInput = styled.div`
  display: grid;
  margin-bottom: 1rem;
`
export const SelectOption = styled.button`
  position: relative;
  border: 1px solid var(--black-10);
  padding: 0.3rem 0.5rem;
  background: transparent;
  border-radius: 0.2rem;
  font: normal normal 400 0.8rem/1.2rem var(--font-primary);
  color: var(--black-50);
  display: flex;
  justify-content:start;
  align-items: center;
  gap: 0.5rem;
  width: max-content;
  & svg{
    width: 14px
  }
`
export const BoxButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`
export const BoxSelectButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const ButtonAction = styled.button`
  ${ButtonAppRepeat}
  color: ${(props) => (props.className === 'red' ? 'var(--red)' : 'var(--blue)')};
  background: ${(props) => (props.className === 'red' ? 'var(--red-5)' : 'var(--blue-5)')};
  border: 1px solid ${(props) => (props.className === 'red' ? 'var(--red-10)' : 'var(--blue-10)')};
`
