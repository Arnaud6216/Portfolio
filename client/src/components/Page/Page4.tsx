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
        <h2>Contactez moi</h2>
        <div>
          <a href="https://www.linkedin.com/in/arnaud-guevaer-11434a2a9/">
            Linkedin
          </a>
        </div>
        <form id="contact-form" action="/api/contact" method="POST">
          <label htmlFor="name">Nom :</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" required />

          <button type="submit">Envoyer</button>
        </form>
        <div id="response" />
      </div>
    </motion.div>
  );
};

export default Page4;
