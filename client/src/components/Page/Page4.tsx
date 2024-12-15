import { motion } from "framer-motion";
import "./Page.css";

const Page4 = () => {
  return (
    <motion.div
      className="page"
      initial={{ rotateY: -90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      exit={{ rotateY: 90, opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="page-content">
        <h2>Contact</h2>
        <p>Contactez moi</p>
      </div>
    </motion.div>
  );
};

export default Page4;
