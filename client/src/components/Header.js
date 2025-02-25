import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: "url('./Robot Codice e Ai.jpeg')",
        backgroundSize: "cover",
        height: "350px",
      }}
    >
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#8b008b", padding: "0.5rem 1rem" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand navbar-brand-hover" to="/">
            <img
              src="./logo bs.png"
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-top rounded-circle"
            />
            Beatrice Sacco
          </Link>
          <div className="ms-auto">
            <a
              href="/login"
              className="btn btn-primary btn-custom"
              style={{
                fontSize: "0.9rem",
                padding: "1px",
                margin: "5px",
                color: "#ffe4b5",
                background: "#8b008b",
                borderColor: "rgba(0,0,0,0.65)",
              }}
            >
              Login
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="profilo"
                  style={{
                    fontSize: "1.1rem",
                    paddingRight: "0",
                    color: "#ffe4b5",
                  }}
                >
                  Profilo
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/competenze"
                  style={{
                    fontSize: "1.1rem",
                    color: "#ffe4b5",
                    padding: "0",
                  }}
                >
                  Competenze
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contatti"
                  style={{
                    fontSize: "1.1rem",
                    color: "#ffe4b5",
                    paddingRight: "0",
                  }}
                >
                  Contatti
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/articoli"
                  style={{
                    fontSize: "1.1rem",
                    color: "#ffe4b5",
                    padding: "0",
                  }}
                >
                  Articoli
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        style={{
          textAlign: "center",
          margin: "30px",
          color: "rgb(239, 241, 232)",
        }}
      >
        <h1 style={{ color: "#ffe4b5" }}>Benvenuto nel mio sito!</h1>
        <p style={{ fontFamily: "arial", color: "#ffe4b5" }}>
          Scopri le mie competenze e Profilo.
        </p>
      </div>
    </header>
  );
};

export default Header;
