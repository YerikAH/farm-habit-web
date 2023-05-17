import DecorationFooter from '../components/Page/DecorationFooter/DecorationFooter'
import FeaturesSection from '../components/Page/FeaturesSection/FeaturesSection'
import HeroSection from '../components/Page/HeroSection/HeroSection'
import KnowInterface from '../components/Page/KnowInterface/KnowInterface'
import Navigation from '../components/Page/Navigation/Navigation'
import SampleFooter from '../components/Page/SampleFooter/SampleFooter'

const WebPage = () => {
  return (
    <>
      <Navigation />
      <main className='main_page'>
        <HeroSection/>
        <KnowInterface/>
        <FeaturesSection/>
      </main>
      <footer>
        <DecorationFooter/>
        <SampleFooter />
      </footer>
    </>
  )
}

export default WebPage
