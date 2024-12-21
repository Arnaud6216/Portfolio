import { motion } from "framer-motion";
import "./Page.css";

const Page3 = () => {
  const projects = [
    {
      img: "",
      name: "Code Quest Academy (en cours)",
      description:
        "Un jeu éducatif interactif mêlant investigation et apprentissage, où les joueurs incarnent un étudiant en développement web, résolvant des énigmes pour maîtriser HTML, CSS, JavaScript, et autres technologies, tout en explorant un narratif inspiré de la pop culture.",
      technology: "React, TypeScript, Node.js, Express, SQL.",
      url: "",
    },
    {
      img: "",
      name: "Z Warriors Clicker",
      description:
        "Un jeu incremental sur l'univers de Dragon Ball, où les joueurs cliquent pour accumuler de la puissance, débloquer des transformations et techniques puissantes, et vaincre des ennemis emblématiques.",
      technology: "React, TypeScript,",
      url: "",
    },
    {
      img: "",
      name: "Feed good",
      description:
        "Réalisé lors d'un hackathon, Feed good est une application basée sur le thème de la bienveillance, où l'utilisateur peut effectuer des actions positives pour lui-même et pour les autres.",
      technology: "React, TypeScript, Node.js, Express.",
      url: "",
    },
    {
      img: "",
      name: "Wild away",
      description:
        "Une application de réservation d'hotêls et de restaurants partout dans le monde avec une carte interactive.",
      technology: "React, TypeScript, Node.js, Express.",
      url: "",
    },
    {
      img: "",
      name: "Fantizz",
      description: "Un quiz intéractif sur un thème humoristique.",
      technology: "HTML, CSS, Javascript.",
      url: "",
    },
  ];

  return (
    <motion.div
      className="page"
      initial={{ rotateY: -90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      exit={{ rotateY: 90, opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="page-content">
        <h2>Projets</h2>
        <section className="projects-container">
          {projects.map((project) => (
            <article key={project.name} className="project">
              <img src={project.img} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>{project.technology}</p>
            </article>
          ))}
        </section>
      </div>
    </motion.div>
  );
};

export default Page3;
