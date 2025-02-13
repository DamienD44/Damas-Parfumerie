import { useState } from "react";
import "./ModifyParfum.css";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";

function ModifyParfum() {
  const { parfumId } = useParams<{ parfumId: string }>();
  const [parfum, setParfum] = useState({
    name: "",
    marque: "",
    description: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setParfum({ ...parfum, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3310/api/damasparfum/${parfumId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(parfum),
        },
      );

      if (response.ok) {
        alert("Le parfum a été modifié avec succès !");
      } else {
        alert("Une erreur est survenue lors de la mise à jour du parfum.");
      }
    } catch (error) {
      console.error("Erreur lors de la requête PUT:", error);
      alert("Une erreur est survenue. Veuillez réessayer plus tard.");
    }
  };

  return (
    <>
      <Header />
      <section id="create">
        <form onSubmit={handleSubmit}>
          <h4> Modifiez le nom du parfum</h4>
          <label htmlFor="name">Nom de votre parfum</label>
          <input
            type="text"
            id="parfum-name"
            name="name"
            value={parfum.name}
            onChange={handleChange}
            placeholder="Exemple : One Million"
          />
          <h4>Modifiez la marque du parfum</h4>
          <label htmlFor="marque">Marque de votre parfum</label>
          <input
            type="text"
            id="marque-name"
            name="marque"
            value={parfum.marque}
            onChange={handleChange}
            placeholder="Exemple : Paco Rabanne"
          />
          <h4>Modifiez la description du parfum</h4>
          <label className="description" htmlFor="description">
            Description de votre parfum
          </label>
          <input
            type="text"
            id="parfum-description"
            name="description"
            value={parfum.description}
            onChange={handleChange}
            placeholder="Exemple : Parfum élégant et boisé idéal en soirée"
          />
          <h4>Modifiez l'image du parfum</h4>
          <label htmlFor="image">Ajoutez un URL de votre parfum</label>
          <input
            type="text"
            id="parfum-image"
            name="image"
            value={parfum.image}
            onChange={handleChange}
            placeholder="https://OneMillion.jpg"
          />
          <button type="submit">Validez</button>
        </form>
      </section>
    </>
  );
}

export default ModifyParfum;
