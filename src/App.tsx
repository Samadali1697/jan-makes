import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Home from './components/home/Home'

function App() {
  return (
    <div className="root">
      <Router>
          <div className="navBar">
              <NavBar />
          </div>
          <div className="homeBar">
              {/* <Routes>
                  <Route exact path="/" element={
                      <Home about={portfolioData.about} interest={portfolioData.interest} journey={portfolioData.journey}/>
                  }/>
                  <Route path="*" element={<NotFound />}/>
              </Routes> */}
              <Home />
          </div>
      </Router>

    </div>
  )
}

export default App
