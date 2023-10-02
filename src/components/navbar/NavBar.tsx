import logo from '../../assets/logo.png';
import './NavBar.css';

function NavBar() {

  return (
    <div className="navbar">
      <div className="logo">
        <a href="#home">
          <img src={logo} alt={"Jan Makes"} />
        </a>
      </div>
      <div className="navigations">
        <a className="active" href="#home">Home</a>
        <a href="#news">Portfolio</a>
        <a href="#contact">Patterns</a>
      </div>
    </div>
  )
}

export default NavBar
