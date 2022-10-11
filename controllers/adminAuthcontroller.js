const jwt = require("jsonwebtoken");
const { Admin } = require("../models");

async function adminAuthController(req, res) {
  const admin = await Admin.findOne({ email: req.body.email });
  if (!admin) return res.status(401).json("Credenciales erróneas");
  const passwordIsCorrect = await admin.comparePassword(req.body.password);
  if (!passwordIsCorrect) return res.status(401).json("Credenciales erróneas");

  const token = jwt.sign({ id: admin.id }, process.env.ADMIN_ACCESS_TOKEN_SECRET);
  res.json({ token, email: req.body.email });
}

module.exports = adminAuthController;
