import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Profilo from "./Profilo";
import Competenze from "./Competenze";
import Articoli from "./Articoli";
import Login from "./Login";
import Contatti from "./Contatti";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div
                style={{
                  textAlign: "center",
                  margin: "40px",
                  color: "rgb(239, 241, 232)",
                }}
              ></div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/profilo" element={<Profilo />} />
          <Route path="/competenze" element={<Competenze />} />
          <Route path="/articoli" element={<Articoli />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
