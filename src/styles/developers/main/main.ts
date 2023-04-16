import styled from 'styled-components'

export const MainStyles = styled.main`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 2px;
  & section {
    transform-style: preserve-3d;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    flex-direction: column;
  }
`
