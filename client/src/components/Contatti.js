// src/components/Contatti.js
import React from "react";

const Contatti = () => {
  const nome = "Beatrice";
  const cognome = "Sacco";
  const email = "saccobeatrice98@gmail.com";
  const indirizzo = "Via pio Rajna 49";
  const numeroTelefono = "340 572 5819";
  const linkedInUrl = "https://www.linkedin.com/in/beatrice-sacco-b0298a197/";
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="border-border-purple">
            <h2 style={{ color: "#8b008b" }}>Contatti</h2>
            <ul className="list-unstyled">
              <li style={{ color: "#ff0066" }}>
                <strong style={{ color: "#8b008b" }}>Nome:</strong> {nome}
              </li>
              <li style={{ color: "#ff0066" }}>
                <strong style={{ color: "#8b008b" }}>Cognome:</strong> {cognome}
              </li>
              <li style={{ color: "#ff0066" }}>
                <strong style={{ color: "#8b008b" }}>Email:</strong>{" "}
                <a href={`mailto:${email}`} className="custom-email-link">
                  {email}
                </a>
              </li>
              <li style={{ color: "#ff0066" }}>
                <strong style={{ color: "#8b008b" }}>Indirizzo:</strong>{" "}
                {indirizzo}
              </li>
              <li style={{ color: "#ff0066" }}>
                <strong style={{ color: "#8b008b" }}>
                  Numero di Telefono:
                </strong>{" "}
                {numeroTelefono}
              </li>
              <li style={{ color: "#ff0066" }}>
                <strong style={{ color: "#8b008b" }}>LinkedIn:</strong>{" "}
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-link"
                >
                  Profilo LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contatti;
