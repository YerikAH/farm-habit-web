import { useState } from 'react'
import {
  FORM_ERROR_EMAIL,
  FORM_ERROR_LITTLE,
  FORM_ERROR_VOID,
} from './form_contribution'
import { regexEmail } from '../../../regex/regex'
import s from './form_contribution.module.css'

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
    
    // eslint-disable-next-line prefer-const
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
    <form className={s.form} action='https://formsubmit.co/yerik05vh@gmail.com' method='POST'>
      <input type='hidden' name='name' value='Farm Habit' />
      <input type='hidden' name='email' value='farm@habit.com' />
      <input
        className={s.form_input}
        placeholder='Ingresa tu email . . .'
        name='message'
        type='email'
        value={inputEmail}
        onChange={(e) => handleChange(e)}
        required
      />
      {errorState.state && <span className={s.form_span}>{errorState.message}</span>}
      <button
      className={s.form_button}
        type='submit'
        disabled={errorState.state}
        onClick={() => validateEmail(inputEmail)}
      >
        Enviar
      </button>
    </form>
  )
}

export default FormContribution
