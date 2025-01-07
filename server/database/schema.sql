create table skills (
  id int unsigned primary key auto_increment not null,
  type varchar(100) not null,
  name varchar(100) not null unique,
  img_src varchar(255) not null unique
);

create table projects (
  id int unsigned primary key auto_increment not null,
  name varchar(100) not null unique,
  img_src varchar(255) not null unique,
  gif_src varchar(255) not null unique,
  description text not null,
  technology varchar(100) not null,
  url varchar(255) not null
);

insert into skills(id, type, name, img_src)
values
  (1, "front", "HTML", "../src/assets/images/html.png"),
  (2, "front", "CSS", "../src/assets/images/css.png"),
  (3, "front", "Javascript", "../src/assets/images/js.png"),
  (4, "front", "React", "../src/assets/images/react.png"),
  (5, "front", "Typescript", "../src/assets/images/ts.png"),
  (6, "back", "Node.js", "../src/assets/images/node.png"),
  (7, "back", "express", "../src/assets/images/express.png"),
  (8, "back", "SQL", "../src/assets/images/sql.png");

insert into projects(id, name, img_src, gif_src, description, technology, url)
values
  (1, "Code Quest Academy", "../src/assets/images/CQA.png", "Pas encore d'aperçu", "Un jeu éducatif interactif mêlant investigation et apprentissage, où les joueurs incarnent un étudiant en développement web, résolvant des énigmes pour maîtriser HTML, CSS, JavaScript, et autres technologies, tout en explorant un narratif inspiré de la pop culture.", "React, TypeScript, Node.js, Express, SQL.", "https://github.com/WildCodeSchool-2024-09/JS-lille-P3-code-quest-academy"),
  (2, "Z Warriors Clicker", "../src/assets/images/zwarrior.png", "../src/assets/images/zwarrior.gif", "Un jeu incremental sur l'univers de Dragon Ball, où les joueurs cliquent pour accumuler de la puissance, débloquer des transformations et techniques puissantes, et vaincre des ennemis emblématiques.", "React, TypeScript,", "https://github.com/Arnaud6216/Z-Warriors-Clicker"),
  (3, "Feed Good", "../src/assets/images/feedgood.png", "../src/assets/images/feedgood.gif", "Réalisé lors d'un hackathon, Feed good est une application basée sur le thème de la bienveillance, où l'utilisateur peut effectuer des actions positives pour lui-même et pour les autres.", "React, TypeScript, Node.js, Express.", "https://github.com/WildCodeSchool-2024-09/lille-protojam"),
  (4, "Wild Away", "../src/assets/images/wildaway.png", "../src/assets/images/wildaway.gif", "Une application de réservation d'hotêls et de restaurants partout dans le monde avec une carte interactive.", "React, TypeScript, Node.js, Express.", "https://github.com/WildCodeSchool-2024-09/LILLE-0924-PROJECT2-G2-WILD-AWAY"),
  (5, "Fantizz", "../src/assets/images/fantizz.png", "../src/assets/images/fantizz.gif", "Un quiz intéractif sur un thème humoristique.", "HTML, CSS, Javascript", "https://github.com/Foub404/projet-p1");
 
