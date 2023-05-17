interface ButtonDaysInterface {
  id: number
  name: string
  active: boolean
}
export const LABEL_NAME = 'Nombre del hábito'
export const LABEL_DAYS = 'Días que desarrollaras tu habitos'
export const LABEL_ICON = 'Icono de tu hábito'
export const LABEL_TIME = 'Tiempo de tu hábito'
export const BUTTON_HOUR = 'Hora'
export const BUTTON_MINUTE = 'Minuto'
export const BUTTON_CANCEL = 'Cancelar'
export const BUTTON_DAYS: ButtonDaysInterface[] = [
  {
    id: 0,
    name: 'Do',
    active: false,
  },
  {
    id: 1,
    name: 'Lu',
    active: false,
  },
  {
    id: 2,
    name: 'Ma',
    active: false,
  },
  {
    id: 3,
    name: 'Mi',
    active: false,
  },
  {
    id: 4,
    name: 'Ju',
    active: false,
  },
  {
    id: 5,
    name: 'Vi',
    active: false,
  },
  {
    id: 6,
    name: 'Sa',
    active: false,
  },
]
