import Header from "../composants/Header";
import Footer from "../composants/Footer";
import { NavLink } from "react-router-dom";

function Erreur() {
  return <div className="erreur">
    <Header />
    <div className="erreur_container">
      <h1 className="erreur_title">404</h1>
      <p className="erreur_text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to={`/`} className="erreur_link">Retourner sur la page d'accueil</NavLink>
    </div>
    <Footer />
  </div>;
}

export default Erreur;
