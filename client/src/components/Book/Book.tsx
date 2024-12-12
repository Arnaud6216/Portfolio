import { useState } from "react";
import Cover from "../Cover/Cover";
import Page from "../Page/Page";
import "./Book.css";

const Book = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { title: "Bienvenue", content: "Bienvenue dans mon univers fantastique." },
    {
      title: "Compétences",
      content: "HTML, CSS, JavaScript, React, Node.js...",
    },
    { title: "Projets", content: "Découvrez mes réalisations." },
    { title: "Contact", content: "Contactez-moi pour discuter." },
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="book-container">
      {!isOpen ? (
        <Cover onOpen={() => setIsOpen(true)} />
      ) : (
        <div className="book">
          <button type="button" className="prev-button" onClick={prevPage}>
            ◀
          </button>
          <div className="pages">
            {pages.map((page, index) => (
              <Page
                key={page.title}
                title={page.title}
                content={page.content}
                visible={index === currentPage}
              />
            ))}
          </div>
          <button type="button" className="next-button" onClick={nextPage}>
            ▶
          </button>
        </div>
      )}
    </div>
  );
};

export default Book;
