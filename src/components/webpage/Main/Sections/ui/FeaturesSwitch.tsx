import * as style from '../../../../../styles/webpage/main/sections/features'
import { IconChevronDown } from '@tabler/icons-react'
import { useState } from 'react'
import { FeaturesOptions } from '../../../../../interface/interface'
import { AllFeatures } from '../../../../../enum/enum'
import { changeTrueValue } from '../../../../../helpers/helpers'
import { FEATURES_CONST } from '../../../../../constant/constantJsx'

const FeaturesSwitch = () => {
  const [features, setFeatures] = useState<FeaturesOptions[]>(FEATURES_CONST)
  const handleChangeFeature = (name: AllFeatures) => {
    const newValue: FeaturesOptions[] = changeTrueValue(features, name)
    setFeatures(newValue)
  }
  return (
    <style.FeaturesGrid>
      <style.FeaturesGridOne>
        <style.ImageResponsive
          src={features.find((item) => item.active === true)?.image}
          alt='feature app'
        />
      </style.FeaturesGridOne>
      <style.FeaturesGridTwo>
        {features.map((item) => (
          <style.ButtonOption
            key={item.id}
            className={`${item.active}`}
            onClick={() => handleChangeFeature(item.feature)}
          >
            <style.ButtonSpace>
              <style.ButtonOptionTitle>
                {!item.active && item.icon}
                {item.active && item.iconActive}
                <style.ButtonTitle className={`${item.active}`}>{item.feature}</style.ButtonTitle>
              </style.ButtonOptionTitle>
              <IconChevronDown
                color={item.active ? '#4B7EFF' : '#363D4F'}
                transform={item.active ? 'rotate(-180)' : 'rotate(0)'}
              />
            </style.ButtonSpace>
            {item.active && <style.Description>{item.description}</style.Description>}
          </style.ButtonOption>
        ))}
      </style.FeaturesGridTwo>
    </style.FeaturesGrid>
  )
}

export default FeaturesSwitch
