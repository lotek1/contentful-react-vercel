import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import GuideCard from './pages/GuideCard'
import GuideDetail  from './pages/[slug]'
import NotFound from './pages/NotFound'
const App = () =>  (
  <Router>
    <Routes>
      <Route path="/" element={<GuideCard />} />
      <Route path="/page/:slug" element={<GuideDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  )

export default App

