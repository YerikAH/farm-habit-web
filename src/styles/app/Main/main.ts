import styled from 'styled-components'

export const MainStyle = styled.main`
  display: flex;
`
export const PlaceSection = styled.section`
  display: none;
  @media(min-width: 720px){
    display: block;
    width: 100%;
    max-width: 18.75rem;
    height: 100%;
  }
`
