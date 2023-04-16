import { Route, Routes, useLocation } from 'react-router-dom'
import { PathRoutes } from './enum/enum'
import WebPage from './pages/WebPage'
import DevPage from './pages/DevPage'

function App() {
  const location = useLocation()
  return (
    <Routes location={location}>
      <Route path={PathRoutes.webpage} element={<WebPage />} />
      <Route path={PathRoutes.developers} element={<DevPage />} />
    </Routes>
  )
}

export default App
