const { Customer } = require("../models");

async function index(req, res) {
  const customers = await Customer.find({});
  res.json(customers);
}

module.exports = {
  index,
};
