import "./Page.css";
import { motion } from "framer-motion";

const Page1 = () => {
  return (
    <motion.div
      className="page"
      initial={{ rotateY: -90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      exit={{ rotateY: 90, opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="page-content">
        <h2>Introduction</h2>
        <p className="page-text">
          Avant d'entamer ma reconversion dans le{" "}
          <strong>développement web</strong>, j'ai commencé en tant que Gendarme
          Adjoint Volontaire. Une expérience enrichissante où j'ai appris{" "}
          <strong>
            l'esprit de cohésion, la rigueur, et le sens des responsabilités
          </strong>
          , ce qui m'a forgé une forte éthique de travail.
        </p>
        <p className="page-text">
          Je suis ensuite entré dans le domaine de la{" "}
          <strong>logistique</strong> où j'ai appris les codes du e-commerce et
          de la chaîne d'approvisionnement. Ce qui m'a permis de comprendre les
          enjeux du secteur et de développer des{" "}
          <strong>
            compétences organisationnelles ainsi qu'une grande flexibilité
          </strong>
          .
        </p>
        <p className="page-text">
          Après une période de remise en question, j'ai enfin décidé de me
          reconvertir dans le <strong>développement web</strong>, qui m'est
          apparu comme une évidence, étant passionné par les nouvelles
          technologies et les jeux vidéos depuis toujours. J'ai donc intégré la
          Wild Code School,{" "}
          <strong>bien décidé à faire de cette passion mon métier</strong>.
        </p>
      </div>
    </motion.div>
  );
};

export default Page1;
