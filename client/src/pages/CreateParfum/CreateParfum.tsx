import Header from "../../components/Header/Header";
import "./CreateParfum.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Card } from "../../types/ParfumCard";

interface Parfum {
  id: number;
  name: string;
  marque: string;
  description: string;
  image: string;
}

function CreateParfum() {
  const [parfum, setParfum] = useState<Card>({
    name: "",
    marque: "",
    description: "",
    image: "",
    user_id: "",
  });
  const [message, setMessage] = useState("");
  const [parfums, setParfums] = useState<Parfum[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/damasparfum/")
      .then((res) => res.json())
      .then((data) => setParfums(data))
      .catch((err) =>
        console.error("Erreur lors de la récupération des parfums:", err),
      );
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParfum({ ...parfum, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3310/api/damasparfum/parfums/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(parfum),
        },
      );

      const result = await response.text();

      if (response.ok) {
        setMessage(result);
        setParfum({
          name: "",
          marque: "",
          description: "",
          image: "",
          user_id: "",
        });

        const updatedParfums = await fetch(
          "http://localhost:3310/api/damasparfum/parfums",
        )
          .then((res) => res.json())
          .catch((err) =>
            console.error("Erreur lors de la récupération des parfums:", err),
          );
        setParfums(updatedParfums);
      } else {
        setMessage(`Erreur : ${result}`);
      }
    } catch (error) {
      setMessage("Erreur lors de l'envoi des données.");
    }
  };

  const HandleDelete = async (id: number) => {
    try {
      const response = await fetch(
        `http://localhost:3310/api/damasparfum/parfums/delete/${id}`,
        {
          method: "DELETE",
        },
      );
      if (response.ok) {
        setParfums(parfums.filter((parfum) => parfum.id !== id));
        setMessage("Parfum supprimé avec succès");
      } else {
        setMessage("Erreur lors de la suppression");
      }
    } catch (error) {
      setMessage("Erreur lors de la suppression");
    }
  };

  return (
    <>
      <Header />
      <section id="list">
        <h2 className="h2-create">Vos Parfums ajoutés</h2>
        <ul className="modify-parfum">
          {parfums.map((parfum) => (
            <li key={parfum.id}>
              <div className="create-img">
                <img src={parfum.image} alt={parfum.name} width="100" />
              </div>
              <div className="create-info">
                <h3>{parfum.name}</h3>
                <p>{parfum.marque}</p>
                <p>{parfum.description}</p>
                <button type="button" onClick={() => HandleDelete(parfum.id)}>
                  🗑 Supprimer
                </button>
                <Link to="/mofify">
                  <button className="create-modify-button" type="button">
                    ✏ Modifier
                  </button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section id="create">
        <form onSubmit={handleSubmit}>
          <h4>Nom du parfum</h4>
          <label htmlFor="name">Nom de votre parfum</label>
          <input
            type="text"
            id="parfum-name"
            name="name"
            value={parfum.name}
            onChange={handleChange}
            placeholder="Exemple : One Million"
          />
          <h4>Marque du parfum</h4>
          <label htmlFor="name">Marque de votre parfum</label>
          <input
            type="text"
            id="marque-name"
            name="marque"
            value={parfum.marque}
            onChange={handleChange}
            placeholder="Exemple : Paco Rabanne"
          />
          <h4>description du parfum</h4>
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
          <h4>Image du parfum</h4>
          <label htmlFor="image">ajouter un url de votre parfum</label>
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
        {message && <p className="message">{message}</p>}
      </section>
    </>
  );
}

export default CreateParfum;
