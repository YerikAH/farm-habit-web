import { useState } from 'react'
import { IconChevronDown } from '@tabler/icons-react'
import { AllFeatures, FEATURES_CONST, FeaturesOptions } from './features_switch'
import s from './features_switch.module.css'

const FeaturesSwitch = () => {
  const [features, setFeatures] = useState<FeaturesOptions[]>(FEATURES_CONST)
  const handleChangeFeature = (name: AllFeatures) => {
    const newValue: FeaturesOptions[] = changeTrueValue(features, name)
    setFeatures(newValue)
  }

  function changeTrueValue(obj: FeaturesOptions[], myVar: AllFeatures): FeaturesOptions[] {
    obj = obj.map(o => {
      if (o.active === true) {
        return { ...o, active: false }
      }
      return o
    })
    const index = obj.findIndex(o => o.feature === myVar)
    obj[index] = { ...obj[index], active: true }

    return obj
  }

  return (
    <div className={s.features_grid}>
      <div className={s.features_grid_one}>
        <img src={features.find(item => item.active === true)?.image} alt='feature app' />
      </div>
      <div className={s.features_grid_two}>
        {features.map(item => (
          <button
            key={item.id}
            style={{ backgroundColor: item.active ? 'var(--blue-5)' : 'transparent' }}
            className={s.features_grid_two_button}
            onClick={() => handleChangeFeature(item.feature)}
          >
            <div className={s.features_grid_two_button_box}>
              <div className={s.features_grid_two_button_box_title}>
                {!item.active && item.icon}
                {item.active && item.iconActive}
                <p
                  className={s.features_grid_two_button_box_title_text}
                  style={{ color: item.active ? 'var(--blue)' : 'var(--black-100)' }}
                >
                  {item.feature}
                </p>
              </div>
              <IconChevronDown
                color={item.active ? '#4B7EFF' : '#363D4F'}
                transform={item.active ? 'rotate(-180)' : 'rotate(0)'}
              />
            </div>
            {item.active && (
              <p className={s.features_grid_two_button_description}>{item.description}</p>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FeaturesSwitch
