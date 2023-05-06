import ReactDOM from 'react-dom'
import { elementHtmlSelect } from '../../../../helpers/helpers'
import * as style from '../../../../styles/app/Main/modals/ad_ed_modal'
const AddHabit = () => {
  const elementHTML = document.getElementById('add')
  return ReactDOM.createPortal(
    <style.AdEdModal>
      <style.Modal>
        <style.ButtonClose></style.ButtonClose>
        <style.HeadlinePrincipal>Agregar hábito</style.HeadlinePrincipal>
        <style.BoxForm>
          <style.LabelForm>Nombre del hábito</style.LabelForm>
          <style.InputForm />
          <style.LabelForm></style.LabelForm>
          <style.ButtonSelect>Do</style.ButtonSelect>
          <style.ButtonSelect>Do</style.ButtonSelect>
          <style.ButtonSelect>Do</style.ButtonSelect>
          <style.ButtonSelect>Do</style.ButtonSelect>
          <style.ButtonSelect>Do</style.ButtonSelect>
          <style.ButtonSelect>Do</style.ButtonSelect>
          <style.ButtonSelect>Do</style.ButtonSelect>
        </style.BoxForm>
      </style.Modal>
    </style.AdEdModal>,
    elementHtmlSelect(elementHTML, 'add'),
  )
}

export default AddHabit
