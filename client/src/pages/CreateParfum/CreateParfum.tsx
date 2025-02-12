import "./CreateParfum.css";

function CreateParfum() {
  // function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   const formData = new FormData(e.target);
  //   const data = Object.fromEntries(formData.entries());
  // }

  return (
    <section id="create">
      <form>
        <label htmlFor="name">Nom de votre parfum</label>
        <input
          type="text"
          id="parfum-name"
          name="name"
          placeholder="Exemple : One Million"
        />

        <label htmlFor="name">Marque de votre parfum</label>
        <input
          type="text"
          id="marque-name"
          name="marque"
          placeholder="Exemple : Paco Rabanne"
        />

        <label htmlFor="description">Description de votre parfum</label>
        <input
          type="text"
          id="parfum-description"
          name="description"
          placeholder="Exemple : Parfum élégant et boisé idéal en soirée"
        />

        <label htmlFor="name">ajouter un url de votre parfum</label>
        <input
          type="text"
          id="parfum-image"
          name="image"
          placeholder="https://OneMillion.jpg"
        />
      </form>

      <button type="submit">Validez</button>
    </section>
  );
}

export default CreateParfum;
