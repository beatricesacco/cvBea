import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Profilo from "./Profilo";
import Competenze from "./Competenze";
import Login from "./Login";
import Contatti from "./Contatti";

function App() {
  return (
    <div>
      <Header />
      <Profilo />
      <Competenze />
      <Contatti />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
