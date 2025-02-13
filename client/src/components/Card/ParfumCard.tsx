import "./ParfumCard.css";
import "../../App.css";
import { Link } from "react-router-dom";
import type { Card } from "../../types/ParfumCard";

function ParfumCard({ name, marque, description, image, id }: Card) {
  return (
    <Link to={`/detail/${id}`}>
      <figure>
        <figcaption>{name}</figcaption>
        <figcaption>{marque}</figcaption>
        <img src={image} alt={`Video game named ${name}`} />
        <figcaption>{description}</figcaption>
      </figure>
    </Link>
  );
}

export default ParfumCard;
