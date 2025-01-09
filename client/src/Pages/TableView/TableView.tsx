import { useNavigate } from "react-router-dom";
import "./TableView.css";

const TableView = () => {
  const navigate = useNavigate();

  return (
    <div className="table-view">
      <header className="profile-container">
        <img
          className="profile-img"
          src="./src/assets/images/arnaud.jpg"
          alt=""
        />

        <section className="profile-text-container">
          <h1 className="title-name">Arnaud Guevaer</h1>
          <h2 className="profile-profession">Développeur web full stack</h2>
          <p className="profile-text">
            Fan de science-fiction et d'heroic fantasy, venez découvrir mon
            histoire !
          </p>
          <p className="profile-status">
            <strong>Status : </strong>En recherche d'une alternance à partir du
            17 mars 2025
          </p>
          <a
            className="cv-link"
            download="CV Guevaer Arnaud"
            href=".\src\assets\CV Alternance 2025.pdf"
          >
            Télécharger mon CV
          </a>
        </section>
      </header>

      <main
        className="book-container"
        onClick={() => navigate("/book/intro")}
        onKeyUp={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            navigate("/book/intro");
          }
        }}
      >
        <img
          src="./src/assets/images/bookcover.png"
          alt="Livre fermé"
          className="book-image"
        />
        <span className="page-behind" aria-hidden="true" />
      </main>
    </div>
  );
};

export default TableView;
