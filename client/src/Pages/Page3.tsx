import "./Page.css";
import { useEffect, useState } from "react";

interface Projects {
  id: number;
  name: string;
  img_src: string;
  gif_src: string;
  description: string;
  technology: string;
  url: string;
}

const Page3 = () => {
  const [projects, setProjects] = useState([] as Projects[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projects`)
      .then((response) => response.json())
      .then((data: Projects[]) => {
        setProjects(data);
      });
  }, []);

  const [selectedProject, setSelectedProject] = useState<Projects | null>(null);

  const handleProjectDetails = (project: Projects) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <article className="page">
      <section className="page-content">
        <h1>Mes projets</h1>
        <section className="projects-container">
          {projects.map((project) => (
            <article key={project.name} className="project">
              <img
                className="projects-img"
                src={project.img_src}
                alt=""
                onClick={() => handleProjectDetails(project)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleProjectDetails(project)
                }
              />
              <h2>{project.name}</h2>
            </article>
          ))}
        </section>
      </section>

      {selectedProject && (
        <aside
          className="popup-overlay"
          onClick={handleCloseDetails}
          onKeyUp={(e) => e.key === "Escape" && handleCloseDetails()}
        >
          <article className="popup-content">
            <button
              type="button"
              className="close-button"
              onClick={handleCloseDetails}
            >
              X
            </button>
            <img
              src={selectedProject.gif_src || selectedProject.img_src}
              alt=""
              className="popup-img"
            />
            <h2>{selectedProject.name}</h2>
            <p className="popup-text">{selectedProject.description}</p>
            <p className="popup-text">
              <strong>Technologies :</strong> {selectedProject.technology}
            </p>
            <a
              href={selectedProject.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir sur Github
            </a>
          </article>
        </aside>
      )}
    </article>
  );
};

export default Page3;
