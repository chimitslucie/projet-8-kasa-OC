import { NavLink } from 'react-router-dom';
import logoHeader from '../images/header_logo.png'

function Header() {
    return (
        <header className='header'>
            <img src={logoHeader} className="header_logo" alt="logo-kasa" />
            <div className='header_links'>
                <NavLink to={`/`} className='header_link'>
                    Accueil
                </NavLink>
                <a className='header_link'>
                    A Propos
                </a>
            </div>
        </header>
    )
}

export default Header;