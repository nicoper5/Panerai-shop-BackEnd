const jwt = require("jsonwebtoken");
const { Customer } = require("../models");

async function customerAuthController(req, res) {
  const customer = await Customer.findOne({ email: req.body.email });
  if (!customer) return res.status(401).json("Credenciales erróneas");
  const passwordIsCorrect = await customer.comparePassword(req.body.password);
  if (!passwordIsCorrect) return res.status(401).json("Credenciales erróneas");

  const token = jwt.sign({ id: customer.id }, process.env.ACCESS_TOKEN_SECRET);
  res.json({ token, email: req.body.email });
}

module.exports = customerAuthController;
