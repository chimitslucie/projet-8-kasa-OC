import { useParams } from "react-router-dom";
import datas from "../data/logements.json";
import Header from "../composants/Header";
import Slider from "../composants/Slider";
import Tag from "../composants/Tag";
import Rating from "../composants/rating";
import Collapse from "../composants/Collapse";
import Footer from "../composants/Footer";
import Erreur from "./Erreur";

function Logement() {
  const routeParams = useParams();
  const id = routeParams.id;
  const card = datas.filter((data) => data.id === id)[0];
  
  if (card === undefined) {
    return <Erreur/>;
  }

  return (
    <div id="logement">
      <Header />
      <div className="container">
        <Slider slides={card.pictures} />
        <div className="information">
          <div className="information_content">
            <h1 className="information_content-title">{card.title}</h1>
            <p className="information_content-location">{card.location}</p>
            <ul className="tag_list">
              {card.tags.map((tag, index) => (
                <li key={index} className="tag_list-item">
                  <Tag text={tag} />
                </li>
              ))}
            </ul>
          </div>
          <div className="information_host">
            <div className="card_host">
              <p className="card_host-name">{card.host.name}</p>
              <img className="card_host-img" src={card.host.picture} />
            </div>
            <Rating value={card.rating} />
          </div>
        </div>
        <div className="logement_collapse">
          <Collapse title="Description" text={card.description} />
          <Collapse
            title="Equipements"
            text={
              <ul>
                {card.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Logement;
