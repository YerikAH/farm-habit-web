import styled from 'styled-components'

export const SreenOneStyles = styled.section`
  background: rgba(54, 61, 79, 0.02);
  box-shadow: 0px 4px 5px 3px rgba(0, 0, 0, 0.05);
  border-radius: 40px 40px 0px 0px;
  width: 100%;
  margin: 1rem 2rem 0 2rem;
  position: relative;
`

export const NoThereHabits = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto auto;
  display: grid;
  place-items: center;
`
export const HeadlineNoHabits = styled.h2`
  font: normal normal 700 1.2rem/1.25rem var(--font-primary);
  color: var(--black-100);
  margin-top: 1rem;
`
export const TextBodyOne = styled.p`
  font: normal normal 400 1rem/1.1rem var(--font-primary);
  color: var(--black-50);
  margin-top: 0.8rem;
  max-width: 21.875rem;
  width: 100%;
`
