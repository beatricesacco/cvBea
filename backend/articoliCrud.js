const { MongoClient } = require("mongodb");
const dbName = "Articoli"; // Nome del tuo database
let db;
let client;

async function connectDB() {
  try {
    client = new MongoClient();
    await client.connect();
    console.log("Connesso al database MongoDB");
    db = client.db(dbName);
  } catch (error) {
    console.error("Errore nella connessione al database", error);
  }
}

async function createArticolo(articolo) {
  const result = await db.collection("Articoli").insertOne(articolo);
  return result;
}

async function getArticoli() {
  const articoli = await db.collection("Articoli").find().toArray();
  return articoli;
}

async function updateArticolo(id, articoloAggiornato) {
  const result = await db
    .collection("Articoli")
    .updateOne({ _id: id }, { $set: articoloAggiornato });
  return result;
}

async function deleteArticolo(id) {
  const result = await db.collection("Articoli").deleteOne({ _id: id });
  return result;
}

module.exports = {
  connectDB,
  createArticolo,
  getArticoli,
  updateArticolo,
  deleteArticolo,
};
