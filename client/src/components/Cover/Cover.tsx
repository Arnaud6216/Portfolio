import { useState, useContext } from "react";
import "./Cover.css";
import Context from "../../services/context";

interface CoverProps {
  onOpen: () => void;
}

const Cover = ({ onOpen }: CoverProps) => {

  const context = useContext(Context);
  const setNavStyle = context?.setNavStyle;

  const [isOpening, setIsOpening] = useState(false);
  
  const handleClick = () => {
    setNavStyle?.("navbar-hide");
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
