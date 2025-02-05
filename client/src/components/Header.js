import React from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#8b008b", padding: "0.5rem 1rem" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand navbar-brand-hover" href="Home">
            <img
              src="./logo bs.png"
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-top rounded-circle"
            />
            Beatrice Sacco
          </a>
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
            <ul className="navbar-nav" ms-auto="true">
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="profilo"
                  style={{ fontSize: "0.8rem", paddingRight: "auto" }}
                >
                  Profilo
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="competenze"
                  style={{ fontSize: "0.9rem" }}
                >
                  Competenze
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="contatti"
                  style={{ fontSize: "0.9rem" }}
                >
                  Contatti
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="login"
                  style={{ fontSize: "0.9rem" }}
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
