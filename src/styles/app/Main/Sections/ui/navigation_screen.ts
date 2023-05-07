import styled from 'styled-components'

export const NavigationScreenTwo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
`
export const FilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background: var(--gray-100);
  border: none;
  font: normal normal 600 0.9rem/1rem var(--font-primary);
  color: var(--black-100);
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
`
export const InputSearchBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;
  background: var(--gray-100);
  border-radius: 0.4rem;
  overflow: hidden;
`
export const InputSearch = styled.input`
  width: 100%;
  padding: 0.5rem 2rem 0.5rem 1rem;
  color: var(--black-100);
  border: none;
  background: transparent;
  font: normal normal 600 0.9rem/1rem var(--font-primary);
  text-align: left;
`
export const ButtonSearch = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.4rem;
  border: none;
  background: transparent;
  display: grid;
  place-items: center;
  color: var(--black-100);
  opacity: 0.7;
`
