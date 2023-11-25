import logo from '../../assets/logo.png';
import './NavBar.css';

function NavBar() {

  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Jan Makes" />
        </a>
      </div>
      <div className="navigations">
        <a className="active" href="/">Home</a>
        <a href="portfolio">Portfolio</a>
        <a href="patterns">Patterns</a>
      </div>
    </div>
  )
}

export default NavBar
