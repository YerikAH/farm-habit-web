import styled, {css} from 'styled-components'

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
  opacity: 0.7
`
export const HabitsBox = styled.div`
  display: grid;
  place-items: start;
  box-shadow: rgba(75, 126, 255, 0.1) 0px 6px 7px -4px;
`
export const HabitBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
  padding: 1rem 2rem;
`
export const IconHabitBox = styled.div`
  display: grid;
  place-items: center;
  margin-right: 2rem;
`
export const HabitImportant = styled.div`
  display: flex;
  justify-content: center;
  align-center: center;
`
export const IconHabit = styled.div`
  padding: 0.2rem;
  display: grid;
  place-items: center;
  color: var(--white);
  background: #7AC4ED;
  border-radius: 0.4rem;
  box-shadow: 0px 0px 30px #7AC4ED;
`
export const HabitBoxDetails = styled.div`
  display: grid;
  gap: 0.3rem;
`
export const TitleHabit = styled.h4`
  font: normal normal 600 1rem/1.2rem var(--font-primary);
  color: var(--black-100);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
`
const TextBodyNormal = css`
  font: normal normal 400 0.8rem/1.2rem var(--font-primary);
  color: var(--black-50);
`
export const TimeHabit = styled.p`
  ${TextBodyNormal}
  text-transform: uppercase;
`

export const TitleHabitDuration = styled.p`
  font: normal normal 600 0.9rem/1.2rem var(--font-primary);
  color: var(--black-100);
`
export const HabitDuration = styled.p`
 ${TextBodyNormal} 
`
export const IconButton = styled.button`
  display: grid;
  place-items: center;
  border: none;
  color: var(--black-100);
  background: transparent;
  border-radius: 2rem;
  padding: 0.3rem;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover{
    background: var(--gray-100);
  }
`
