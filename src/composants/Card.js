import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <Link to={`/logement/${data.id}`}>
      <article className="card">
        <img src={data.cover} alt={data.title} className="card_img" />
        <h3 className="card_title">{data.title}</h3>
      </article>
    </Link>
  );
}

export default Card;
