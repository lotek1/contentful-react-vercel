import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GuideCard from './pages/GuideCard'
import GuideDetail  from './pages/[slug]'
import NotFound from './pages/NotFound'
import Auth0ProviderWithHistory from './Auth0Provider'

const App = () => (
  <Router>
    <Auth0ProviderWithHistory>
    <Routes>
      <Route path="/" element={<GuideCard />} />
      <Route path="/guide/:slug" element={<GuideDetail />} />
      <Route path="404" element={<NotFound />} />
    </Routes>
    </Auth0ProviderWithHistory>
  </Router>
  )

export default App

