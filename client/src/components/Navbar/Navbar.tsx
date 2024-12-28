import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link to="/">Accueil</Link>
        </li>{" "}
        <li>
          <Link to="/book/intro">Introduction</Link>
        </li>{" "}
        <li>
          <Link to="/book/skills">Compétences</Link>
        </li>{" "}
        <li>
          <Link to="/book/projects">Projets</Link>
        </li>{" "}
        <li>
          <Link to="/book/contact">Contact</Link>
        </li>{" "}
      </ul>
    </nav>
  );
};

export default Navbar;
