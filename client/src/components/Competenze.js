import React from "react";

const Competenze = () => {
  const softSkills = [
    "Teamwork",
    "Capacità comunicative e relazionali",
    "Orientata al risultato",
    "Gestione del tempo",
    "Capacità di interpretazione delle leggi e normative italiane e europee",
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
    "Inglese B2",
  ];
  const showHeader = true;
  return (
    <div className="container mt-5 bg-custom">
      {showHeader && <h3 style={{ color: "#8b008b" }}>Competenze</h3>}
      <div className="row border-purple">
        <div className="col-md-6 mb-4  border-purple">
          <h3 style={{ color: "#8b008b" }}>Hard Skills</h3>
          <ul className="list-group">
            {hardSkills.map((skill, index) => (
              <li key={index} className="list-group-item-color">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6 mb-4  border-purple ">
          <h3 style={{ color: "#8b008b" }}>Soft Skills</h3>
          <ul className="list-group-item-color">
            {softSkills.map((skill, index) => (
              <li key={index} className="list-group-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Competenze;
