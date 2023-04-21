/* eslint-disable prefer-const */
import { useState } from 'react'
import * as style from '../../../../../styles/developers/main/sections/contribution'
import {
  FORM_ERROR_EMAIL,
  FORM_ERROR_LITTLE,
  FORM_ERROR_VOID,
} from '../../../../../constant/constantText'

const FormContribution = () => {
  const [inputEmail, setInputEmail] = useState('')
  const [errorState, setErrorState] = useState({
    message: '',
    state: false,
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueInput = e.target.value
    setInputEmail(valueInput)
    validateEmail(valueInput)
  }

  function validateEmail(value: string) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let errorObj = {
      message: '',
      state: false,
    }
    if (value.length === 1 || value.length === 0) {
      errorObj.state = true
      errorObj.message = FORM_ERROR_VOID
    } else if (value.length <= 5) {
      errorObj.state = true
      errorObj.message = FORM_ERROR_LITTLE
    } else if (!regexEmail.test(value)) {
      errorObj.state = true
      errorObj.message = FORM_ERROR_EMAIL
    }
    setErrorState(errorObj)
  }
  return (
    <style.ContributionForm action='https://formsubmit.co/yerik05vh@gmail.com' method='POST'>
      <input type='hidden' name='name' value='Farm Habit' />
      <input type='hidden' name='email' value='farm@habit.com' />
      <style.ContributionInput
        placeholder='Ingresa tu email . . .'
        name='message'
        type='email'
        value={inputEmail}
        onChange={(e) => handleChange(e)}
        required
      />
      {errorState.state && <style.ErrorForm>{errorState.message}</style.ErrorForm>}
      <style.ContributionButton
        type='submit'
        disabled={errorState.state}
        onClick={() => validateEmail(inputEmail)}
      >
        Enviar
      </style.ContributionButton>
    </style.ContributionForm>
  )
}

export default FormContribution
