import styled, { css } from 'styled-components'

const buttonNav = css`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--black-100);
  font: normal normal 700 0.9rem/1.2rem var(--font-primary);
`
export const HeaderPage = styled.header`
  width: 100%;
`
export const NavPageStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 0 2rem;
`
export const ListDesorder = styled.ul`
  display: flex;
  gap: ${(props) => props.className && `${props.className}rem`};
`
export const ListStyle = styled.li`
  display: flex;
`
export const ListLink = styled.button`
  ${buttonNav}
  gap: 0.5rem;
  align-items: end;
  display: ${(props) => props.className === 'desktop' ? 'none' : 'flex'};
  @media (min-width: 720px) {
    display: flex;
    display: ${(props) => props.className === 'mobile' && 'none'};
  }
`
export const ListButtonLittle = styled.button`
  ${buttonNav}
  max-width: 1rem;
  width: 100%;
  @media (min-width: 720px) {
    max-width: 1.563rem;
  }
`
export const ListButtonBig = styled.button`
  ${buttonNav}
  border-radius: 15rem;
  position: relative;
  overflow: hidden;
  max-width: 1.25rem;
  max-height: 1.25rem;
  width: 100%;
  @media (min-width: 720px) {
    max-width: 1.875rem;
    max-height: 1.875rem;
  }
`

export const PlaceImage = styled.img`
  object-fit: cover;
  width: 100%;
`
