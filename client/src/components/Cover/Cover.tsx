import { useState } from "react";
import "./Cover.css";

interface CoverProps {
  onOpen: () => void;
}

const Cover = ({ onOpen }: CoverProps) => {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(onOpen, 1000);
  };

  return (
    <button
      type="button"
      className={`cover ${animate ? "animate-cover" : ""}`}
      onClick={handleClick}
    >
      <div className="book-title">
        <h1>Arnaud Guevaer</h1>
        <p>Découvrez mon histoire</p>
      </div>
    </button>
  );
};

export default Cover;
