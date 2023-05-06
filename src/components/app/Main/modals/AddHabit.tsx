import ReactDOM from 'react-dom'
import { elementHtmlSelect } from '../../../../helpers/helpers'
import * as style from '../../../../styles/app/Main/modals/ad_ed_modal'
import { IconX, IconChevronDown } from '@tabler/icons-react'
const AddHabit = () => {
  const elementHTML = document.getElementById('add')
  return ReactDOM.createPortal(
    <style.AdEdModal>
      <style.Modal>
        <style.ButtonClose>
          <IconX />
        </style.ButtonClose>
        <style.HeadlinePrincipal>Agregar hábito</style.HeadlinePrincipal>
        <style.BoxForm>
          <style.BoxFormDiv>
            <style.BoxLabelInput>
              <style.LabelForm>Nombre del hábito</style.LabelForm>
              <style.InputForm />
            </style.BoxLabelInput>
            <style.BoxLabelInput>
              <style.LabelForm>Días que desarrollaras tus habitos</style.LabelForm>
              <style.BoxButtonSelect>
                <style.ButtonSelect>Do</style.ButtonSelect>
                <style.ButtonSelect>Lu</style.ButtonSelect>
                <style.ButtonSelect>Ma</style.ButtonSelect>
                <style.ButtonSelect>Mi</style.ButtonSelect>
                <style.ButtonSelect>Ju</style.ButtonSelect>
                <style.ButtonSelect>Vi</style.ButtonSelect>
                <style.ButtonSelect>Sa</style.ButtonSelect>
              </style.BoxButtonSelect>
            </style.BoxLabelInput>
          </style.BoxFormDiv>
          <style.BoxFormDiv>
            <style.BoxLabelInput>
              <style.LabelForm>Icono del hábito</style.LabelForm>
              <style.SelectOption>
                <IconChevronDown />
              </style.SelectOption>
            </style.BoxLabelInput>
            <style.BoxLabelInput>
              <style.LabelForm>Tiempo de tu hábito</style.LabelForm>
              <style.BoxSelectButtons>
                <style.SelectOption>
                  Hora
                  <IconChevronDown />
                </style.SelectOption>
                <style.SelectOption>
                  Minutos
                  <IconChevronDown />
                </style.SelectOption>
              </style.BoxSelectButtons>
            </style.BoxLabelInput>
          </style.BoxFormDiv>
        </style.BoxForm>
        <style.BoxButtons>
          <style.ButtonAction className='red'>Cancelar</style.ButtonAction>
          <style.ButtonAction>Agregar</style.ButtonAction>
        </style.BoxButtons>
      </style.Modal>
    </style.AdEdModal>,
    elementHtmlSelect(elementHTML, 'add'),
  )
}

export default AddHabit
