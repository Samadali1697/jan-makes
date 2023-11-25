import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Home from './components/home/Home'
import NotFound from './components/not-found/NotFound'
import FootBar from './components/footer/FootBar'

function App() {
  return (
    <div className="appRoot">
      <Router>
          <NavBar />
          
          <Routes>
              <Route path="/" element={
                  <Home />
              }/>
              <Route path="/home" element={
                  <Home />
              }/>
              <Route path="*" element={<NotFound />}/>
          </Routes>
          
          <FootBar />
      </Router>
    </div>
  )
}

export default App
