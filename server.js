const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Richiesta ricevuta alla rotta radice");
});

app.listen(3000, () => console.log("Web server in ascolto sulla porta 3000"));
