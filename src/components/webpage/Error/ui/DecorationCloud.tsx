import { CircleDecoration } from '../../../../styles/webpage/main/sections/hero'
import * as style from '../../../../styles/error/error'

const DecorationCloud = () => {
  return (
    <>
      <style.CloudBaseBig
        id='left'
        className='-7rem'
        style={{ bottom: '-25rem', animationName: 'cloud' }}
      />
      <style.CloudBase
        id='left'
        className='-5rem'
        style={{ bottom: '15rem', animationName: 'cloud' }}
      />
      <style.CloudBase
        id='left'
        className='-7rem'
        style={{ bottom: '-5rem', animationName: 'cloud' }}
      />
      <style.CloudBase
        id='left'
        className='-10rem'
        style={{ bottom: '-25rem', animationName: 'cloud' }}
      />

      <style.CloudBaseBig
        id='right'
        className='-7rem'
        style={{ bottom: '-15rem', animationName: 'cloudRight' }}
      />
      <style.CloudBase
        id='right'
        className='-2rem'
        style={{ bottom: '15rem', animationName: 'cloudRight' }}
      />
      <style.CloudBase
        id='right'
        className='-7rem'
        style={{ bottom: '-20rem', animationName: 'cloudRight' }}
      />
      <CircleDecoration className='left' />
      <CircleDecoration />
    </>
  )
}

export default DecorationCloud
