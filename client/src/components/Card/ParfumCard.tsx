import "./ParfumCard.css";
import "../../App.css";
import type { Card } from "../../types/ParfumCard";
function ParfumCard({ name, marque, description, image }: Card) {
  return (
    <figure>
      <figcaption>{name}</figcaption>
      <figcaption>{marque}</figcaption>
      <img src={image} alt={`Video game named ${name}`} />
      <figcaption>{description}</figcaption>
    </figure>
  );
}

export default ParfumCard;
