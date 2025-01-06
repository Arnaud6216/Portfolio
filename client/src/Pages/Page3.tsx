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
    <div className="page">
      <div className="page-content">
        <h2>Mes projets</h2>
        <section className="projects-container">
          {projects.map((project) => (
            <article key={project.name} className="project">
              <img
                className="projects-img"
                src={project.img_src}
                alt={project.name}
                onClick={() => handleProjectDetails(project)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleProjectDetails(project)
                }
              />
              <h3>{project.name}</h3>
            </article>
          ))}
        </section>
      </div>

      {selectedProject && (
        <div
          className="popup-overlay"
          onClick={handleCloseDetails}
          onKeyUp={(e) => e.key === "Escape" && handleCloseDetails()}
        >
          <div className="popup-content">
            <button
              type="button"
              className="close-button"
              onClick={handleCloseDetails}
            >
              X
            </button>
            <img
              src={selectedProject.gif_src || selectedProject.img_src}
              alt={selectedProject.name}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Page3;
