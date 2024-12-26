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
        <h1>Arnaud Guevaer</h1>
        <h2>Développeur web full stack</h2>
        <p>
          Fan de science-fiction et d'heroic fantasy, venez découvrir mon
          histoire !
        </p>
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
    </div>
  );
};

export default TableView;
