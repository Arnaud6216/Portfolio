import "./Page.css";
import { motion } from "framer-motion";
import { useState } from "react";

const Page4 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [responseColor, setResponseColor] = useState("");

  // Gestion des changements dans le formulaire
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Empêche le rechargement de la page

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage(result.success);
        setResponseColor("green");
      } else {
        setResponseMessage(result.error);
        setResponseColor("red");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
      setResponseMessage("Une erreur est survenue. Veuillez réessayer.");
      setResponseColor("red");
    }
  };

  return (
    <motion.div
      className="page"
      initial={{ rotateY: -90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      exit={{ rotateY: 90, opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="contact-title">Contactez moi</h2>
      <div className="page4-content">
        <div className="content-container">
          <a href="https://www.linkedin.com/in/arnaud-guevaer-11434a2a9/">
            <img
              className="social-img"
              src="../src/assets/images/linkedin.png"
              alt="linkedin link"
            />
          </a>
          <a href="https://github.com/Arnaud6216">
            <img
              className="social-img"
              src="../src/assets/images/github.png"
              alt="github link"
            />
          </a>
          <p className="contact-text">guevaer8@gmail.com</p>
          <p className="contact-text">06 11 49 45 31</p>
          <p className="contact-text">62136 La couture</p>
        </div>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="form-container">
            <label htmlFor="name">Nom *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-container">
            <label htmlFor="company">Société</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-container">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-container">
            <label htmlFor="phone">Téléphone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="message-container">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button className="submit-button" type="submit">
            Envoyer
          </button>
        </form>
        <div id="response" style={{ color: responseColor, marginTop: "10px" }}>
          {responseMessage}
        </div>
      </div>
    </motion.div>
  );
};

export default Page4;
