import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import GuideCard from './GuideCard'
import GuideDetail  from './guide/[slug]'
const App = () => {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<GuideCard />} />
      <Route path="/guide/:slug" element={<GuideDetail />} />
    </Routes>
  </Router>
  )
}


export default App

