// src/components/Login.js
import React from "react";

const Login = () => {
  return (
    <section id="login">
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Accedi</button>
      </form>
    </section>
  );
};

export default Login;
