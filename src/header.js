import logoHeader from './header_logo.png'
import './header.scss'

function Header() {
    return (
        <header className='header'>
            <img src={logoHeader} className="header_logo" alt="logo-kasa" />
            <div className='header_links'>
                <a className='header_link'>
                    Accueil
                </a>
                <a className='header_link'>
                    A Propos
                </a>
            </div>
        </header>
    )
}

export default Header;