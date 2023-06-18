import s from './circle_decoration.module.css'

interface Props {
  orientation?: string
}

const CircleDecoration = ({ orientation }: Props) => {
  return (
    <div
      className={`${s.circle_decoration} ${
        orientation !== 'left' ? '' : s['circle_decoration--left']
      }`}
    ></div>
  )
}

export default CircleDecoration
