// src/components/Login.js
import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Logica per il login
      console.log("Login:", { email, password });
    } else {
      // Logica per la registrazione
      console.log("Registrazione:", { email, password });
    }
  };

  return (
    <section
      id="login"
      className="container mt-5"
      style={{
        backgroundColor: "#ee82ee",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      <h2 style={{ color: "#8b008b" }}>
        {isLogin ? "Login" : "Registrazione"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            style={{ color: "#ffe4b5", width: "30em" }}
            htmlFor="email"
            className="form-label"
          >
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="form-label"
            style={{ color: "#ffe4b5" }}
          >
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ backgroundColor: "#8b008b", color: "#ffe4b5" }}
        >
          {isLogin ? "Accedi" : "Registrati"}
        </button>
      </form>
      <p className="mt-3">
        {isLogin ? "Non hai un account? " : "Hai già un account? "}
        <button
          className="btn btn-link"
          onClick={() => setIsLogin(!isLogin)}
          style={{
            backgroundColor: "#8b008b",
            color: "#ffe4b5",
            textDecoration: "none",
          }}
        >
          {isLogin ? "Registrati" : "Accedi"}
        </button>
      </p>
    </section>
  );
};

export default Login;
