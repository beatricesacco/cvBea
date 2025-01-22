const express = require("express");
const app = express();
const Connect = require("./backend/connect.js");

const connection = new Connect();
connection.get();

function loggedInMiddleware(req, res, next) {
  let isLogged = true;
  if (isLogged) {
    next();
  } else {
    res.send("Non sei loggato! Effettua il login per la pagina profilo");
  }
}

function verifyAccessMid(req, res, next) {
  let verifyAccess = false;
  if (verifyAccess) {
    next();
  } else {
    res.send("Accesso negato");
  }
}

app.get("/", (req, res) => {
  res.send("<h1>Benvenuto nel mio sito curriculum!</h1>");
});

app.get("/login", verifyAccessMid, (req, res) => {
  res.send("<h1>Login pagina</h1>");
});

app.get("/profilo", loggedInMiddleware, (req, res) => {
  res.send("<h1>Questa è la pagina del mio profilo</h1>");
});

app.get("/competenze", (req, res) => {
  res.send("<h1>Questa è la pagina delle mie competenze</h1>");
});

app.get("/contatti", (req, res) => {
  res.send("<h1>Questa è la pagina dei miei contatti</h1>");
});

app.listen(3000, () => console.log("Web server in ascolto sulla porta 3000"));
