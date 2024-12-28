import type { RequestHandler } from "express";
import nodemailer from "nodemailer";

const add: RequestHandler = async (req, res) => {

  console.info("Données reçues :", req.body);

    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        res.status(400).json({ error: "Tous les champs sont requis." });
        return;
      }
    
      const transporter = nodemailer.createTransport({
        
        service: "gmail", 
        auth: {
          user: process.env.EMAIL_USER, 
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, 
        subject: `Nouveau message de ${name}`, 
        text: message, 
      };
    
      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: "Message envoyé avec succès !" });
      } catch (error) {
        console.error("Erreur lors de l'envoi de l'email :", error);
        res.status(500).json({ error: "Erreur lors de l'envoi du message." });
      }
    };
    

export default { add };