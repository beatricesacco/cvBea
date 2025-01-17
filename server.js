const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Benvenuto nel mio sito curriculum!</h1>");
});

app.get("/profilo", (req, res) => {
  res.send("<h1>Questa è la pagina del mio profilo</h1>");
});

app.get("/competenze", (req, res) => {
  res.send("<h1>Questa è la pagina delle mie competenze</h1>");
});

app.get("/contatti", (req, res) => {
  res.send("<h1>Questa è la pagina dei miei contatti</h1>");
});

app.listen(3000, () => console.log("Web server in ascolto sulla porta 3000"));
