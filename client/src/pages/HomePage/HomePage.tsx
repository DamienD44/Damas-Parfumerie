import "./HomePage.css";
function HomePage() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Bienvenue sur notre boutique de parfums</h1>
        <p className="home-text">
          Découvrez notre collection de parfums uniques et raffinés. Chaque
          fragrance est soigneusement sélectionnée pour vous offrir une
          expérience olfactive inoubliable.
        </p>
        <p className="home-text">
          Explorez notre section "Parfums" et trouvez la senteur qui vous
          correspond. Vous pourrez ajouter vos parfums afin de le faire
          découvrir aux autres
        </p>
        <button type="button" className="home-button">
          Découvrir nos parfums
        </button>
      </div>
    </div>
  );
}

export default HomePage;
