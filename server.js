const express = require("express");
const cors = require("cors");
const app = express();
const Connect = require("./backend/connect.js");
const {
  ConnectDB,
  createArticolo,
  getArticoli,
  updateArticolo,
  deleteArticolo,
} = require("./backend/articoliCrud.js");

app.use(cors());
app.use(express.json());

const connection = new Connect();
connection.on("connectionOK", () => {
  app.listen(3001, () => console.log("Web server in ascolto sulla porta 3001"));
});
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
  let verifyAccess = true;
  if (verifyAccess) {
    next();
  } else {
    res.send("Accesso negato");
  }
}

app.get("/", (req, res) => {
  res.send("<h1>Benvenuto nel mio sito curriculum!</h1>");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Verifica delle credenziali (sostituisci questa logica con quella reale, per esempio con il database)
  if (email === "test@example.com" && password === "password123") {
    // Risposta positiva al login
    res.json({ success: true, message: "Login riuscito!" });
  } else {
    // Risposta negativa al login
    res.status(401).json({ success: false, message: "Credenziali errate!" });
  }
});

// Rotta di registrazione (POST)
app.post("/register", (req, res) => {
  const { email, password } = req.body;

  // Simulazione della registrazione (sostituisci con una logica di salvataggio nel database)
  if (email && password) {
    res.json({ success: true, message: "Registrazione riuscita!" });
  } else {
    res.status(400).json({ success: false, message: "Dati incompleti" });
  }
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
// Rotte CRUD
app.post("/articoli", async (req, res) => {
  const articolo = req.body;
  const result = await createArticolo(articolo);
  res.status(201).send(result);
});

// Rotta per ottenere tutti gli articoli
app.get("/articoli", async (req, res) => {
  const articoli = await getArticoli();
  res.status(200).send(articoli);
});

// Rotta per aggiornare un articolo
app.put("/articoli/:id", async (req, res) => {
  const id = req.params.id;
  const articoloAggiornato = req.body;
  const result = await updateArticolo(id, articoloAggiornato);
  res.status(200).send(result);
});

// Rotta per eliminare un articolo
app.delete("/articoli/:id", async (req, res) => {
  const id = req.params.id;
  const result = await deleteArticolo(id);
  res.status(200).send(result);
});
