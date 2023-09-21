import { useParams } from "react-router-dom";
import datas from "../data/logements.json";
import Slider from "../composants/Slider";

function Logement() {
    const routeParams = useParams();
    const id = routeParams.id;
    const card = datas.filter((data) => data.id === id)[0];
    console.log(card.pictures);
  return (
    <div id="logement">
        <Slider slides={card.pictures}/>
    </div>
  );
}

export default Logement;
