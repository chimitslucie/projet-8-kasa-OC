import logoFooter from "../images/footer_logo.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_content">
                <img src={logoFooter} className="footer_logo" alt="logo-kasa" />
                <p className="footer__text">© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
