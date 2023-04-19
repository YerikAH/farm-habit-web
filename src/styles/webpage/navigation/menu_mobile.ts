import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MENU_MOBILE_CLASS } from '../../../constant/classDinamic'

export const MenuMobileStyles = styled.div`
  position: fixed;
  transition: 0.3s;
  right: ${(props) => (props.className === MENU_MOBILE_CLASS ? '-13.5625rem' : '0')};
  top: 0;
  z-index: 500;
  background: var(--white-03);
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(20px);
  width: 13.5625rem;
  height: 100vh;
   @media (min-width: 800px) {
    display: none;
  }
`
export const MenuMobileCenter = styled.div`
  position: relative;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
export const ButtonCloseBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 2rem;
`
export const ButtonCloseHam = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const MenuMobileUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding-left: 1rem;
`
export const MenuMobileList = styled.li`
  width: 100%;
`
export const MenuMobileLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: left;
  gap: 0.5rem;
  font: normal normal 700 0.8rem/1.2rem var(--font-primary);
  color: var(--black-100);
  padding: 0.5rem 0;
`
export const MenuMobileTry = styled.button`
  position: absolute;
  bottom: 1rem;
  left: 0;
  background-color: transparent;

  font: normal normal 700 0.8rem/1.2rem var(--font-primary);
  color: var(--black-100);
  border-radius: 1rem;
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  margin: 0 auto;
  gap: 0.5rem;
  width: 90%;
  border: 1px solid var(--black-100);
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition: 0.3;
  & svg{
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition: 0.3;
  }
  &:hover{
    color: var(--blue);
    border: 1px solid var(--blue);
  }
`
