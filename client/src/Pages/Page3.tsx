import "./Page.css";
import { useState } from "react";
import { motion } from "framer-motion";

const Page3 = () => {
  const projects = [
    {
      img: "../src/assets/images/CQA.png",
      gif: "",
      name: "Code Quest Academy",
      description:
        "Un jeu éducatif interactif mêlant investigation et apprentissage, où les joueurs incarnent un étudiant en développement web, résolvant des énigmes pour maîtriser HTML, CSS, JavaScript, et autres technologies, tout en explorant un narratif inspiré de la pop culture.",
      technology: "React, TypeScript, Node.js, Express, SQL.",
      url: "https://github.com/WildCodeSchool-2024-09/JS-lille-P3-code-quest-academy",
    },
    {
      img: "../src/assets/images/zwarrior.png",
      gif: "../src/assets/images/zwarrior.gif",
      name: "Z Warriors Clicker",
      description:
        "Un jeu incremental sur l'univers de Dragon Ball, où les joueurs cliquent pour accumuler de la puissance, débloquer des transformations et techniques puissantes, et vaincre des ennemis emblématiques.",
      technology: "React, TypeScript,",
      url: "https://github.com/Arnaud6216/Z-Warriors-Clicker",
    },
    {
      img: "../src/assets/images/feedgood.png",
      gif: "../src/assets/images/feedgood.gif",
      name: "Feed good",
      description:
        "Réalisé lors d'un hackathon, Feed good est une application basée sur le thème de la bienveillance, où l'utilisateur peut effectuer des actions positives pour lui-même et pour les autres.",
      technology: "React, TypeScript, Node.js, Express.",
      url: "https://github.com/WildCodeSchool-2024-09/lille-protojam",
    },
    {
      img: "../src/assets/images/wildaway.png",
      gif: "../src/assets/images/wildaway.gif",
      name: "Wild away",
      description:
        "Une application de réservation d'hotêls et de restaurants partout dans le monde avec une carte interactive.",
      technology: "React, TypeScript, Node.js, Express.",
      url: "https://github.com/WildCodeSchool-2024-09/LILLE-0924-PROJECT2-G2-WILD-AWAY",
    },
    {
      img: "../src/assets/images/fantizz.png",
      gif: "../src/assets/images/fantizz.gif",
      name: "Fantizz",
      description: "Un quiz intéractif sur un thème humoristique.",
      technology: "HTML, CSS, Javascript.",
      url: "https://github.com/Foub404/projet-p1",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<{
    img: string;
    gif: string;
    name: string;
    description: string;
    technology: string;
    url: string;
  } | null>(null);

  const handleProjectDetails = (project: {
    img: string;
    gif: string;
    name: string;
    description: string;
    technology: string;
    url: string;
  }) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <motion.div
      className="page"
      initial={{ rotateY: -90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      exit={{ rotateY: 90, opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="page-content">
        <h2>Mes projets</h2>
        <section className="projects-container">
          {projects.map((project) => (
            <article key={project.name} className="project">
              <img
                className="projects-img"
                src={project.img}
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
          <motion.div
            className="popup-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="close-button"
              onClick={handleCloseDetails}
            >
              X
            </button>
            <img
              src={selectedProject.gif || selectedProject.img}
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
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default Page3;
