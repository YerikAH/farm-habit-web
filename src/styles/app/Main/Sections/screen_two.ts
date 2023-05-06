import styled from 'styled-components'
export const NavigationScreenTwo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const FilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background: var(--);
  border: none;
  font: normal normal 400 0.8rem/1rem var(--font-primary);
  color: var(--black-100);
  padding: 0.5rem 1rem;
`
export const InputSearchBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 200px;
  background: var(--gray-100);
  border-radius: 0.4rem;
  overflow: hidden;
`
export const InputSearch = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  color: var(--black-100);
  border: none;
  background: transparent;
  font: normal normal 400 0.8rem/1rem var(--font-primary);
  text-align: left;
`
export const ButtonSearch = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  display: grid;
  place-items: center;
  color: var(--black-100)
`
export const HabitsBox = styled.div`
  display: grid;
  place-items: start
`
export const HabitBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`
export const IconHabitBox = styled.div`
  display: grid;
  place-items: center;
`
export const IconHabit = styled.div`
  padding: 0.2rem;
  border-radius: 0.1rem;
  display: grid;
  place-items: center;
  filter: drop-shadow(0px 0px 30px #7AC4ED);
  color: var(--white)
`
export const HabitBoxDetails = styled.div`
  display: grid;
  gap: 0.5rem;
`
export const TitleHabit = styled.h4`
  font: normal normal 600 1rem/1.2rem var(--font-primary);
  color: var(--black-100);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
`
export const TimeHabit = styled.p`
  font: normal normal 400 0.8rem/1.2rem var(--font-primary);
  color: var(--black-50);
  text-transform: uppercase;
`

