import { useLoaderData } from "react-router-dom";
import type { Card } from "../../types/ParfumCard";
import "./ParfumDetail.css";
import Header from "../../components/Header/Header";

function ParfumDetail() {
  const data = useLoaderData() as Card;
  return (
    <>
      <Header />

      <main className="detail">
        <img src={data.image} alt={data.name} />
        <section>
          <hgroup>
            <h2>Name</h2>
            <p>{data.name}</p>
          </hgroup>
          <hgroup>
            <h2>Marque</h2>
            <p>{data.marque}</p>
          </hgroup>
          <hgroup>
            <h2>Description</h2>
            <p>{data.description}</p>
          </hgroup>
        </section>
      </main>
    </>
  );
}
export default ParfumDetail;
