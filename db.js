const { MongoClient } = require("mongodb");

const URL =
  "mongodb+srv://nguyenkhanh28031999:Khanh%401999@cluster0.9ryr0ph.mongodb.net/";
const DATABASE = "test-ky3";
const db = {};
async function connectToDB() {
  const client = new MongoClient(URL);
  await client.connect();
  const database = client.db(DATABASE);

  db.Inventory = database.collection("Inventory");
  db.Order = database.collection("Order");
  db.Users = database.collection("Users");
}

module.exports = { connectToDB, db };
