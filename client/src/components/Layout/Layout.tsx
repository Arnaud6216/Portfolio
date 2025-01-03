import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Layout.css";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    "/",
    "/book/intro",
    "/book/skills",
    "/book/projects",
    "/book/contact",
  ];

  const currentPageIndex = pages.indexOf(location.pathname);

  const goToPreviousPage = () => {
    if (currentPageIndex > 0) {
      navigate(pages[currentPageIndex - 1]);
    }
  };

  const goToNextPage = () => {
    if (currentPageIndex < pages.length - 1) {
      navigate(pages[currentPageIndex + 1]);
    }
  };

  return (
    <div className="layout">
      <Navbar />

      <div className="book-container">
        <Outlet />
      </div>

      <div className="navigation-buttons">
        <button type="button" className="prev-page" onClick={goToPreviousPage}>
          Page Précédente
        </button>
        {currentPageIndex !== 4 ? (
          <button type="button" className="next-page" onClick={goToNextPage}>
            Page Suivante
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Layout;
