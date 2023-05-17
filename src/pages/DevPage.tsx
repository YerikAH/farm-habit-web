import ContributionSection from '../components/Page/ContributionSection/ContributionSection'
import DecorationFooter from '../components/Page/DecorationFooter/DecorationFooter'
import DevelopersSection from '../components/Page/DevelopersSections/DevelopersSection'
import Navigation from '../components/Page/Navigation/Navigation'
import SampleFooter from '../components/Page/SampleFooter/SampleFooter'

const DevPage = () => {
  return (
    <>
      <Navigation />
      <main className='main_page'>
        <DevelopersSection/>
        <ContributionSection/>
      </main>
      <footer>
        <DecorationFooter/>
        <SampleFooter/>
      </footer>
    </>
  )
}

export default DevPage
