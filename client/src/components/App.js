import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Profilo from "./Profilo";
import Competenze from "./Competenze";
import Login from "./Login";
import Contatti from "./Contatti";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Login />
      <Profilo />
      <Competenze />
      <Contatti />
      <Footer />
    </div>
  );
}

export default App;
