const mongoose = require("../db");
const dbInitialSetup = require("../dbInitialSetup");

async function reset(req, res) {
  await mongoose.connection.dropCollection("admins");
  await mongoose.connection.dropCollection("collections");
  await mongoose.connection.dropCollection("customers");
  await mongoose.connection.dropCollection("orders");
  await mongoose.connection.dropCollection("products");
  await dbInitialSetup();

  res.json("db reset!");
}

module.exports = {
  reset,
};
