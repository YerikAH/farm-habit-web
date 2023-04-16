import { MainStyles } from '../../../styles/developers/main/main'
import Footer from '../../webpage/Footer/Footer'
import ContributionSection from './sections/ContributionSection'
import DevelopersSection from './sections/DevelopersSection'

const Main = () => {
  return (
    <MainStyles>
      <DevelopersSection />
      <ContributionSection/>
      <Footer/>
    </MainStyles>
  )
}

export default Main
