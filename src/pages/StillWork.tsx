import Navigation from '../components/Page/Navigation/Navigation'
import SampleFooter from '../components/Page/SampleFooter/SampleFooter'
import SectionStillWork from '../components/Page/SectionStillWork/SectionStillWork'
import CircleDecoration from '../components/Page/CircleDecoration/CircleDecoration'

const StillWork = () => {
  return (
    <>
      <Navigation />
      <main className='main_page'>
        <CircleDecoration orientation='left' />
        <CircleDecoration />
        <SectionStillWork/>
      </main>
      <SampleFooter />
    </>
  )
}

export default StillWork
