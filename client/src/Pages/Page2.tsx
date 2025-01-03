import "./Page.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Skills {
  id: number;
  type: string;
  name: string;
  img_src: string;
}

const Page2 = () => {
  const [skills, setSkills] = useState([] as Skills[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/skills`)
      .then((response) => response.json())
      .then((data: Skills[]) => {
        setSkills(data);
      });
  }, []);

  return (
    <>
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
                {skills
                  ?.filter((skill) => skill.type === "front")
                  .map((skill) => (
                    <li className="skills-item" key={skill.id}>
                      <img
                        className="comp-img"
                        src={skill.img_src}
                        alt={skill.name}
                      />
                      {skill.name}
                    </li>
                  ))}
              </ul>
            </article>

            <article className="back">
              <h3>Back-end</h3>
              <ul className="back-list">
                {skills
                  ?.filter((skill) => skill.type === "back")
                  .map((skill) => (
                    <li className="skills-item" key={skill.id}>
                      <img
                        className="comp-img"
                        src={skill.img_src}
                        alt={skill.name}
                      />
                      {skill.name}
                    </li>
                  ))}
              </ul>
            </article>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default Page2;
