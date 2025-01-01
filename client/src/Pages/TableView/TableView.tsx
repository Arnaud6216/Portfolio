import { useNavigate } from "react-router-dom";
import "./TableView.css";

const TableView = () => {
  const navigate = useNavigate();

  return (
    <div className="table-view">
      <div className="profile-container">
        <img
          className="profile-img"
          src="./src/assets/images/arnaud.jpg"
          alt=""
        />

        <div className="profile-text-container">
          <h1 className="title-name">Arnaud Guevaer</h1>
          <h2 className="profile-profession">Développeur web full stack</h2>
          <p className="profile-text">
            Fan de science-fiction et d'heroic fantasy, venez découvrir mon
            histoire !
          </p>
        </div>
      </div>

      <div
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
      </div>
      <div className="page-behind" />
    </div>
  );
};

export default TableView;
