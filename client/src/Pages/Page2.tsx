import "./Page.css";
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
      <article className="page">
        <section className="page-content">
          <h1 className="skills-title">Compétences</h1>

          <section className="skills">
            <article className="front">
              <h2>Front-end</h2>
              <ul className="front-list">
                {skills
                  ?.filter((skill) => skill.type === "front")
                  .map((skill) => (
                    <li className="skills-item" key={skill.id}>
                      <img className="comp-img" src={skill.img_src} alt="" />
                      {skill.name}
                    </li>
                  ))}
              </ul>
            </article>

            <article className="back">
              <h2>Back-end</h2>
              <ul className="back-list">
                {skills
                  ?.filter((skill) => skill.type === "back")
                  .map((skill) => (
                    <li className="skills-item" key={skill.id}>
                      <img className="comp-img" src={skill.img_src} alt="" />
                      {skill.name}
                    </li>
                  ))}
              </ul>
            </article>
          </section>
        </section>
      </article>
    </>
  );
};

export default Page2;
