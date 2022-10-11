const { Customer } = require("../models");

async function store(req, res) {
  const newCustomer = new Customer({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    phonenumber: req.body.phonenumber,
  });
  try {
    await Customer.create(newCustomer);
    return res.json("user registered successfully!");
  } catch (err) {
    return res.status(401).json(err.errors);
  }
}

module.exports = {
  store,
};
