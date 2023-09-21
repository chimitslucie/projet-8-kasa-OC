import { useParams } from "react-router-dom";
import datas from "../data/logements.json";
import Header from "../composants/Header";
import Slider from "../composants/Slider";
import Tag from "../composants/Tag";
import Collapse from "../composants/Collapse";
import Footer from "../composants/Footer";

function Logement() {
  const routeParams = useParams();
  const id = routeParams.id;
  const card = datas.filter((data) => data.id === id)[0];

  return (
    <div id="logement">
      <Header />
      <div className="container">
        <Slider slides={card.pictures} />
        <div className="information">
          <div className="information_content">
            <h1 className="information_content-title">{card.title}</h1>
            <p className="information_content-location">{card.location}</p>
            <div className="information_content-tag"></div>
          </div>
          <div className="information_host">
            <div className="card_host">
              <p className="card_host-name">{card.host.name}</p>
              <img className="card_host-img" src={card.host.picture} />
            </div>
          </div>
        </div>
        <div className="logement_collapse">
        <Collapse title='Description' text={card.description}/>
        <Collapse title='Equipements' text={card.equipments}/>
        </div>
      </div>
    </div>
  );
}

export default Logement;
