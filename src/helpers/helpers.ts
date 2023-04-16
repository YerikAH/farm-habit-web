import { FeaturesOptions, InterfaceDesktopImages } from '../interface/interface'
import { AllFeatures } from '../enum/enum'

export function elementHtmlSelect(selectHTML: HTMLElement | null, idName: string): HTMLElement {
  if (selectHTML !== null) return document.getElementById(idName) as HTMLElement

  const menuDom: HTMLElement = document.createElement('div')
  menuDom.setAttribute('id', idName)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const bodyElement = document.querySelector('body')!
  bodyElement.appendChild(menuDom)
  return menuDom
}

export function changeTrueValue(obj: FeaturesOptions[], myVar: AllFeatures): FeaturesOptions[] {
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
