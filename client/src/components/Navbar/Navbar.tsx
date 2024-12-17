import { useContext } from "react";
import "./Navbar.css";
import Context from "../../services/context";

function Navbar() {

  const context = useContext(Context);
  const navStyle = context?.navStyle;

  return (
    <>
      <div className={navStyle}>
        <img
          className="profil-img"
          src="./src/assets/images/arnaud.jpg"
          alt="Arnaud Guevaer"
        />
        <h1>Arnaud Guevaer</h1>
        <p className="navbar-text">Développeur web Full stack</p>
      </div>
    </>
  );
}

export default Navbar;
