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
                <NavLink to={`/About`} className='header_link'>
                    A Propos
                </NavLink>
            </div>
        </header>
    )
}

export default Header;