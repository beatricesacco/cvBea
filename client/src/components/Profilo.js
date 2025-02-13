import React from "react";
import "./App.css";

const Profilo = () => {
  return (
    <div
      className="container"
      style={{ backgroundColor: "	#ee82ee", padding: "30px" }}
    >
      <div className="row align-items-center">
        <div className="col-md-4">
          <img
            src="me1-Photoroom.png"
            alt="Profilo"
            className="img-fluid rounded-circle w-90 w-sm-75 w-md-50 "
          />
        </div>
        <div className="col-md-8">
          <h2 style={{ color: "#800080" }}>Beatrice Sacco</h2>
          <p style={{ color: "	#ffe4b5" }}>
            Il mio vero punto di forza è la trasversalità, amo l'originalità,
            sono organizzata, creativa, affidabile e rispettosa dei ruoli,
            comunicativa, aperta al cambiamento, a nuove sfide e capace di
            lavorare in team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profilo;
