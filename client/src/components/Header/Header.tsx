import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <img src="/DamasLogo.jpg" alt="logo Damas Parfumerie" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/parfums">Parfums</Link>
        <Link to="/connexion">Connexion</Link>
      </nav>
    </header>
  );
}
export default Header;
