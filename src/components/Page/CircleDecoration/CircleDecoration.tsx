import { CircleDecorationProps } from './props'
import s from './circle_decoration.module.css'

const CircleDecoration = ({ orientation }: CircleDecorationProps) => { 
  return <div className={`${s.circle_decoration} ${orientation !== 'left' ? '' : s['circle_decoration--left'] }`}></div>
}

export default CircleDecoration
