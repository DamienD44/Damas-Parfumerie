import "./Card.css";
import type { Card } from "../../types/ParfumCard";

function ParfumCard({ name, marque, description, image }: Card) {
  return (
    <figure>
      <figcaption>{name}</figcaption>
      <img src={image} alt={`Parfum named ${name}`} />
      <figcaption> {marque}</figcaption>
      <figcaption> {description}</figcaption>
    </figure>
  );
}

export default ParfumCard;
