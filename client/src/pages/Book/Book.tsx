import { useState } from "react";
import Cover from "../../components/Cover/Cover";
import Page1 from "../../components/Page/Page1";
import Page2 from "../../components/Page/Page2";
import Page3 from "../../components/Page/Page3";
import Page4 from "../../components/Page/Page4";
import "./Book.css";
import { motion } from "framer-motion";

const Book = () => {
  const [isCoverOpen, setIsCoverOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");

  const handleCoverOpen = () => setIsCoverOpen(true);

  const nextPage = () => {
    if (currentPage < 3) {
      setDirection("next");
      setCurrentPage((prev) => prev + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setDirection("previous");
      setCurrentPage((prev) => prev - 1);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return <Page1 />;
      case 1:
        return <Page2 />;
      case 2:
        return <Page3 />;
      case 3:
        return <Page4 />;
      default:
        return null;
    }
  };

  return (
    <div className="book">
      {!isCoverOpen && <Cover onOpen={handleCoverOpen} />}
      {isCoverOpen && (
        <div className="book-content">
          <button
            type="button"
            className="nav-button"
            onClick={previousPage}
            disabled={currentPage === 0}
          >
            {"<"} Précédent
          </button>

          <div className="page-wrapper">
            <motion.div
              className="animated-page"
              key={currentPage}
              initial={{
                rotateY: direction === "next" ? 180 : -180,
                opacity: 0,
              }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{
                rotateY: direction === "next" ? -180 : 180,
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
              {renderPage()}
            </motion.div>
          </div>

          <button
            type="button"
            className="nav-button"
            onClick={nextPage}
            disabled={currentPage === 3}
          >
            Suivant {">"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Book;
