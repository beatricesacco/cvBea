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
    <section id="contatti">
      <h2>Contatti</h2>
      <div>
        <h1>Contatti</h1>
        <p>Nome: {nome}</p>
        <p>Cognome: {cognome}</p>
        <p>Email: {email}</p>
      </div>

      <li>
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </li>
      <p>
        <strong>Indirizzo:</strong> {indirizzo}
      </p>
      <p>
        <strong>Numero di Telefono:</strong> {numeroTelefono}
      </p>
    </section>
  );
};

export default Contatti;
