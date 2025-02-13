import "./ModifyParfum.css";

function ModifyParfum() {
  return (
    <section id="create">
      <form>
        <h4> Modifiez le nom du parfum</h4>
        <label htmlFor="name">Nom de votre parfum</label>
        <input
          type="text"
          id="parfum-name"
          name="name"
          placeholder="Exemple : One Million"
        />
        <h4>Modifiez la marque du parfum</h4>
        <label htmlFor="name">Marque de votre parfum</label>
        <input
          type="text"
          id="marque-name"
          name="marque"
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
          placeholder="Exemple : Parfum élégant et boisé idéal en soirée"
        />
        <h4>Modifiez Image du parfum</h4>
        <label htmlFor="image">ajouter un url de votre parfum</label>
        <input
          type="text"
          id="parfum-image"
          name="image"
          placeholder="https://OneMillion.jpg"
        />
        <button type="submit">Validez</button>
      </form>
    </section>
  );
}
export default ModifyParfum;
