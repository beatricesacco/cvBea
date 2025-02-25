const { MongoClient } = require("mongodb");
const { EventEmitter } = require("node:events");

class Connect extends EventEmitter {
  constructor() {
    super();
    this.mongoClient = new MongoClient("mongodb://localhost:27017");
  }

  async get() {
    await this.mongoClient.connect();
    console.log("Connessione a MongoDB avvenuta");
    this.emit("connectionOK");
  }
}

module.exports = Connect;
