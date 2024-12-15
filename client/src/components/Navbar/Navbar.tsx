import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
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
