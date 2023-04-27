import  ReactDOM  from 'react-dom'
import {elementHtmlSelect} from '../../../../helpers/helpers'

const AddHabit = () => {
  const elementHTML = document.getElementById('add')
  return ReactDOM.createPortal(<></>, elementHtmlSelect(elementHTML,'add'))
}

export default AddHabit
