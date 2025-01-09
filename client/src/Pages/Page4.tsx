import "./Page.css";
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
  const [responseStyle, setResponseStyle] = useState("");

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
      const response = await fetch("http://localhost:3310/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage(result.success);
        setResponseStyle("sucess");
      } else {
        setResponseMessage(result.error);
        setResponseStyle("error");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
      setResponseMessage("Une erreur est survenue. Veuillez réessayer.");
      setResponseStyle("error");
    }
  };

  return (
    <section className="page">
      <h1 className="contact-title">Contactez moi</h1>
      <section className="page4-content">
        <aside className="content-container">
          <a
            href="https://www.linkedin.com/in/arnaud-guevaer-11434a2a9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-img"
              src="../src/assets/images/linkedin.png"
              alt="linkedin link"
            />
          </a>
          <a
            href="https://github.com/Arnaud6216"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-img"
              src="../src/assets/images/github.png"
              alt="github link"
            />
          </a>
          <a href="mailto:guevaer8@gmail.com" className="contact-link">
            guevaer8@gmail.com
          </a>
          <a href="tel:0611494531" className="contact-link">
            06 11 49 45 31
          </a>
          <a
            href="https://www.google.fr/maps/place/62136+La+Couture/@50.5773848,2.6557477,8837m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47dd214f9638afcb:0x40af13e8163f570!8m2!3d50.581166!4d2.714009!16s%2Fm%2F02z35wf?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            className="contact-link"
          >
            62136 La couture
          </a>
        </aside>
        <form id="contact-form" onSubmit={handleSubmit}>
          <fieldset className="form-container">
            <legend hidden>Nom</legend>
            <label htmlFor="name">Nom *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </fieldset>

          <fieldset className="form-container">
            <legend hidden>Société</legend>
            <label htmlFor="company">Société</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </fieldset>

          <fieldset className="form-container">
            <legend hidden>Email</legend>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </fieldset>

          <fieldset className="form-container">
            <legend hidden>Téléphone</legend>
            <label htmlFor="phone">Tél</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </fieldset>

          <fieldset className="message-container">
            <legend hidden>Message</legend>
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </fieldset>
          <button className="submit-button" type="submit">
            Envoyer
          </button>
        </form>
      </section>
      <aside className={responseStyle}>{responseMessage}</aside>
    </section>
  );
};

export default Page4;
