import { Route, Routes, useLocation } from 'react-router-dom'
import { PathRoutes } from './enum/enum'
import WebPage from './pages/WebPage'

function App() {
  const location = useLocation()
  return (
    <Routes location={location}>
      <Route path={PathRoutes.webpage} element={<WebPage />} />
    </Routes>
  )
}

export default App
