import styled from 'styled-components'

export const AdEdModal = styled.div`
  background-color: #fff1;
  position: fixed;
  overflow: auto;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  z-index: 200;
  
`
export const Modal = styled.div`
  background-color: var(--white-80); 
  border-radius: 1.25rem;
  backdrop-filter: blur(25px);
  width: 100%;
  max-width: 31.25rem;
  display: flex;
`

