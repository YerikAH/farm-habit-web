import DecorationFooter from '../components/Page/DecorationFooter/DecorationFooter'
import FeaturesSection from '../components/Page/FeaturesSection/FeaturesSection'
import HeroSection from '../components/Page/HeroSection/HeroSection'
import KnowInterface from '../components/Page/KnowInterface/KnowInterface'
import Navigation from '../components/Page/Navigation/Navigation'
import QuestionSection from '../components/Page/QuestionSection/QuestionSection'
import SampleFooter from '../components/Page/SampleFooter/SampleFooter'
import TryAppSection from '../components/Page/TryAppSection/TryAppSection'

const WebPage = () => {
  return (
    <>
      <Navigation />
      <main className='main_page'>
        <HeroSection />
        <KnowInterface />
        <FeaturesSection />
        <TryAppSection />
        <QuestionSection />
      </main>
      <footer>
        <DecorationFooter />
        <SampleFooter />
      </footer>
    </>
  )
}

export default WebPage
