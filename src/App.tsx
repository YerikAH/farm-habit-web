import { Route, Routes, useLocation } from 'react-router-dom'
import { PathRoutes } from './enum/enum'
import WebPage from './pages/WebPage'
import DevPage from './pages/DevPage'
import Error404 from './pages/Error404'
import StillWork from './pages/StillWork'
import AppPage from './pages/AppPage'

function App() {
  const location = useLocation()
  return (
    <Routes location={location}>
      <Route path={PathRoutes.webpage} element={<WebPage />} />
      <Route path={PathRoutes.developers} element={<DevPage />} />
      <Route path="*" element={<Error404 />} />
      <Route path={PathRoutes.work} element={<StillWork/>}/>
      <Route path={PathRoutes.app} element={<AppPage/>}/>
    </Routes>
  )
}

export default App
