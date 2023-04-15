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
  background-color: #fff1;
  backdrop-filter: blur(20px);
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
padding: 1rem 0;
`
export const Navbar = styled.ul`
display: flex;
justify-content: center;
align-items: center;
gap: 2rem;
`
export const NavItem = styled.li`

`
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


export const CircleDecoration = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  position: absolute;
  top: -6.25rem;
  box-shadow: 0px 0px 250px 400px rgba(75, 126, 255, 0.1);
`