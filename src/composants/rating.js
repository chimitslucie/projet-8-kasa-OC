import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Rating({ value }) {
  const maxStars = 5;
  const filledStars = Math.min(value, maxStars);

  const stars = [];
  for (let i = 0; i < maxStars; i++) {
    const starClassName = i < filledStars ? "filled" : "empty";
    stars.push(
      <FontAwesomeIcon key={i} icon={faStar} className={`star ${starClassName}`} />
    );
  }

  return <div className="rating">{stars}</div>;
}

export default Rating;
