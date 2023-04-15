import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const navlinkCss = css`
  font: normal normal 700 1rem/1.2rem var(--font-primary);
  color: var(--black-100);
  display: block;
  padding: 0.5rem;
`

export const HeaderStyle = styled.header`
  position: fixed;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(5px);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NavigationStyles = styled.nav`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem ;
`
export const Navbar = styled.ul`
  justify-content: center;
  align-items: center;
  gap: 2rem;
  display: ${(props) => (props.className === 'desktop' ? 'none' : 'flex')};
  @media (min-width: 800px) {
    display: flex;
  }
`
export const NavItem = styled.li``
export const NavLink = styled(Link)`
  ${navlinkCss}
`

export const NavLinkButton = styled.a`
  ${navlinkCss}
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  border: 1px solid var(--black-100);
  border-radius: 1rem;
  padding: 0.5rem 2rem;
`

export const NavbarHam = styled.button`
  display: block;
  border: none;
  background-color: transparent;
  @media (min-width: 800px) {
    display: none;
  }
`
