import type { Card } from "../../types/ParfumCard";
import "./Parfum.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ParfumCard from "../../components/Card/ParfumCard";
import Header from "../../components/Header/Header";

function ParfumList() {
  const [data, setData] = useState<Card[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/damasparfum")
      .then((res) => res.json())
      .then((parfumList) => setData(parfumList))
      .catch((error) =>
        console.error("Erreur lors de la récupération des parfums :", error),
      );
  }, []);

  return (
    <>
      <Header />
      <section>
        <div>
          <p>
            Vous ne trouvez pas votre parfums, n'hésitez pas à l'ajouter ici
          </p>
        </div>

        <Link to="/create">
          <button className="button-parfum" type="button">
            {" "}
            Ajouter votre parfum
          </button>
        </Link>
      </section>
      <main id="app">
        {data.map((el) => (
          <ParfumCard
            key={el.id}
            name={el.name}
            marque={el.marque}
            description={el.description}
            image={el.image}
            user_id={el.user_id}
            id={el.id}
          />
        ))}
      </main>
    </>
  );
}

export default ParfumList;
