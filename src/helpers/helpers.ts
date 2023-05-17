import { FeaturesOptions, InterfaceDesktopImages } from '../interface/interface'
import { AllFeatures } from '../enum/enum'
import { regexEmail } from '../regex/regex'

export function elementHtmlSelect(selectHTML: HTMLElement | null, idName: string): HTMLElement {
  if (selectHTML !== null) return document.getElementById(idName) as HTMLElement

  const menuDom: HTMLElement = document.createElement('div')
  menuDom.setAttribute('id', idName)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const bodyElement = document.querySelector('body')!
  bodyElement.appendChild(menuDom)
  return menuDom
}

export function changeTrueValue(obj: unknown[], myVar: AllFeatures): FeaturesOptions[] {
  obj = obj.map((o) => {
    if (o.active === true) {
      return { ...o, active: false }
    }
    return o
  })
  const index = obj.findIndex((o) => o.feature === myVar)
  obj[index] = { ...obj[index], active: true }

  return obj
}

export const order = (
  arr: InterfaceDesktopImages[],
  starti: number,
  endi: number,
): InterfaceDesktopImages[] => {
  const result = [...arr]
  const [removed] = result.splice(starti, 1)
  result.splice(endi, 0, removed)
  return result
}

export function verifyEmail(value: string) {
  if (!regexEmail.test(value)) {
    return false
  } else if (value.length <= 5) {
    return false
  } else {
    return true
  }
}

export function addPMorAM(time: string): string {
  const hourTime = parseInt(time.slice(0, 2))
  if (hourTime >= 12) return time + ' P.M'
  return time + ' A.M'
}

export function getFormattedDate(): string {
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ]
  const currentDate = new Date()
  const month = months[currentDate.getMonth()]
  const day = currentDate.getDate()
  const year = currentDate.getFullYear()

  const formattedDate = `${month} ${day}, ${year}`
  return formattedDate
}
