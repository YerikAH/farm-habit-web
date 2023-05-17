import DecorationCloud from '../components/Page/DecorationCloud/DecorationCloud'
import Navigation from '../components/Page/Navigation/Navigation'
import SampleFooter from '../components/Page/SampleFooter/SampleFooter'
import SectionError from '../components/Page/SectionError/SectionError'

const Error404 = () => {
  return (
    <>
      <Navigation />
      <main className='main_page'>
        <DecorationCloud />
        <SectionError />
      </main>
      <SampleFooter />
    </>
  )
}

export default Error404
