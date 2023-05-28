import CircleDecoration from '../CircleDecoration/CircleDecoration'
import s from './decoration_cloud.module.css'
import './decoration_cloud.css'

const DecorationCloud = () => {
  return (
    <>
      <div
        className={`${s.cloud} ${s['decoration_big']}`}
        style={{ bottom: '-25rem', animationName: 'cloud', left: '-7rem' }}
      />
      <div
        className={`${s.cloud} ${s['decoration']}`}
        style={{ bottom: '15rem', animationName: 'cloud', left: '-5rem' }}
      />
      <div
        className={`${s.cloud} ${s['decoration']}`}
        style={{ bottom: '-5rem', animationName: 'cloud', left: '-7rem' }}
      />
      <div
        className={`${s.cloud} ${s['decoration']}`}
        style={{ bottom: '-25rem', animationName: 'cloud', left: '-10rem' }}
      />

      <div
        className={`${s.cloud} ${s['decoration_big']}`}
        style={{ bottom: '-15rem', animationName: 'cloudRight', right: '-7rem' }}
      />
      <div
        className={`${s.cloud} ${s['decoration']}`}
        style={{ bottom: '15rem', animationName: 'cloudRight', right: '-2rem' }}
      />
      <div
        className={`${s.cloud} ${s['decoration']}`}
        style={{ bottom: '-20rem', animationName: 'cloudRight', right: '-7rem' }}
      />
      <CircleDecoration orientation='left' />
      <CircleDecoration />
    </>
  )
}

export default DecorationCloud
