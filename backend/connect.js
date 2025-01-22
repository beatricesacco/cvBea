const { MongoClient } = require("mongodb");

class Connect {
  constructor() {
    this.mongoClient = new MongoClient("mongodb://localhost:27017");
  }

  async get() {
    await this.mongoClient.connect();
    console.log("Connessione a MongoDB avvenuta");
  }
}

module.exports = Connect;
