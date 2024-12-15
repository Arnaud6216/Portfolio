import { motion } from "framer-motion";
import "./Page.css";

const Page3 = () => {
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

        <div className="project-clicker">
          <h3>Z Warriors Clicker</h3>
        </div>

        <div className="project-p2">
          <h3>Wild Away</h3>
        </div>

        <div className="project-p1">
          <h3>Fantizz</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default Page3;
