import React from "react";

const Competenze = () => {
  const softSkills = [
    "Teamwork",
    "Capacità comunicative e relazionali",
    "Orientata al risultato",
  ];

  const hardSkills = [
    "Microsoft Office",
    "HTML",
    "CSS",
    "JavaScript",
    "SASS Avanzato",
    "Bootstrap",
    "React.js",
    "Node.js",
    "MongoDB",
    "Git & GitHub",
    "Python",
    "Tableau",
  ];
  return (
    <div>
      <h2>Competenze</h2>
      <div>
        <h3>Soft Skills</h3>
        <ul>
          {softSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Hard Skills</h3>
        <ul>
          {hardSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Competenze;
