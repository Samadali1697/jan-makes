import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Home from './components/home/Home'
import FootBar from './components/footer/FootBar'

function App() {
  return (
    <div className="appRoot">
      <Router>
          <NavBar />
          
          {/* <Routes>
              <Route exact path="/" element={
                  <Home about={portfolioData.about} interest={portfolioData.interest} journey={portfolioData.journey}/>
              }/>
              <Route path="*" element={<NotFound />}/>
          </Routes> */}
          <Home />
          <FootBar />
      </Router>
    </div>
  )
}

export default App
