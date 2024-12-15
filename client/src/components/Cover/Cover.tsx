import { useState } from "react";
import "./Cover.css";

interface CoverProps {
  onOpen: () => void;
}

const Cover = ({ onOpen }: CoverProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(onOpen, 1000);
  };

  return (
    <div
      className={`cover ${isOpening ? "cover-opening" : ""}`}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <p>Découvrez mon histoire</p>
    </div>
  );
};

export default Cover;
