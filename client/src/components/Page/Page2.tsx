import { motion } from "framer-motion";
import "./Page.css";

const Page2 = () => {
  return (
    <motion.div
      className="page"
      initial={{ rotateY: -90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      exit={{ rotateY: 90, opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="page-content">
        <h2 className="skills-title">Compétences</h2>
        <section className="skills">
          <article className="front">
            <h3>Front-end</h3>
            <ul className="front-list">
              <li className="skills-item">
                <img
                  className="comp-img"
                  src="../src/assets/images/html.png"
                  alt="logo html"
                />
                HTML
              </li>
              <li className="skills-item">
                <img
                  className="comp-img"
                  src="../src/assets/images/css.png"
                  alt="logo css"
                />
                CSS
              </li>
              <li className="skills-item">
                <img
                  className="comp-img"
                  src="../src/assets/images/js.png"
                  alt="logo javascript"
                />
                JavaScript
              </li>
              <li className="skills-item">
                <img
                  className="comp-img"
                  src="../src/assets/images/react.png"
                  alt="logo react"
                />
                React
              </li>
              <li className="skills-item">
                <img
                  className="comp-img"
                  src="../src/assets/images/ts.png"
                  alt="logo typescript"
                />
                Typescript
              </li>
            </ul>
          </article>
          <article className="back">
            <h3>Back-end</h3>
            <ul className="back-list">
              <li className="skills-item">
                <img
                  className="comp-img"
                  src="../src/assets/images/node.png"
                  alt="logo node"
                />
                Node.js
              </li>
              <li className="skills-item">
                <img
                  className="comp-img"
                  src="../src/assets/images/express.png"
                  alt="logo express"
                />
                Express
              </li>
              <li className="skills-item">
                <img
                  className="comp-img"
                  src="../src/assets/images/sql.png"
                  alt="logo sql"
                />
                SQL
              </li>
            </ul>
          </article>
        </section>
      </div>
    </motion.div>
  );
};

export default Page2;
