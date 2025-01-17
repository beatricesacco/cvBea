import express from "express";


const app = express();
const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
  console.log("Richiesta ricevuta alla rotta radice");
});

app.listen(3000, () => {
  console.log("Web server in ascolto sulla porta 3000");
});
