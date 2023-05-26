import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'


function Header() {
    return (
      <div className='header'>
        <Link to="/">
          <img className='header_logo' alt="HomeLogo" src={logo} />
        </Link>
        <nav className='header_nav'>
          <Link className='header_nav_links' to="/">Accueil</Link>
          <Link className='header_nav_links'to="/about">A Propos</Link>
        </nav>
      </div>
    )
  }
  
  export default Header
