import { MainStyles } from '../../../styles/webpage/main/main'
import { FeaturesSection } from './Sections/FeaturesSection'
import HeroSection from './Sections/HeroSection'
import KnowInterface from './Sections/KnowInterface'

const Main = () => {
  return (
    <MainStyles>
      <HeroSection />
      <KnowInterface />
      <FeaturesSection />
    </MainStyles>
  )
}

export default Main
