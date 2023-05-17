import ScreenOne from '../ScreenOne/ScreenOne'
import ScreenTwo from '../ScreenTwo/ScreenTwo'
import s from './main.module.css'

const Main = () => {
  return (
    <main className={s.main}>
      <section className={s.main_section} />
      <ScreenOne />
      <ScreenTwo />
    </main>
  )
}

export default Main
