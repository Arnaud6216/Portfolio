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
        <h2 className="contact-title">Contactez moi</h2>
        <div className="content-container">
          <a href="https://www.linkedin.com/in/arnaud-guevaer-11434a2a9/">
            <img
              className="social-img"
              src="./src/assets/images/linkedin.png"
              alt="linkedin link"
            />
          </a>
          <a href="https://github.com/Arnaud6216">
            <img
              className="social-img"
              src="./src/assets/images/github.png"
              alt="github link"
            />
          </a>
          <p className="contact-text">guevaer8@gmail.com</p>
          <p className="contact-text">06 11 49 45 31</p>
          <p className="contact-text">62136 La couture</p>
        </div>
        <form id="contact-form" action="/api/contact" method="POST">
          <div className="form-container">
            <label htmlFor="name">Nom *</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-container">
            <label htmlFor="company">Société </label>
            <input type="text" id="company" name="company" />
          </div>

          <div className="form-container">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-container">
            <label htmlFor="phone">Téléphone </label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <div className="message-container">
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" required />
          </div>
          <button className="submit-button" type="submit">
            Envoyer
          </button>
        </form>
        <div id="response" />
      </div>
    </motion.div>
  );
};

export default Page4;
