const { Admin, Collection, Customer, Order, Product } = require("../models");
const mongoose = require("mongoose");
const dbInitialSetup = require("../dbInitialSetup");

async function index(req, res) {
  const admins = await Admin.find({});
  res.json(admins);
}

async function show(req, res) {
  const wantedAdmin = await Admin.findById(req.params.id);
  if (!wantedAdmin) return res.status(404);
  res.json(wantedAdmin);
}

async function store(req, res) {
  const { firstname, lastname, email, password } = req.body;
  const newAdmin = new Admin({ firstname, lastname, email, password });
  try {
    await Admin.create(newAdmin);
    return res.json("New admin added");
  } catch (err) {
    return res.json(err.errors);
  }
}

async function update(req, res) {
  const { firstname, lastname, email } = req.body;
  try {
    await Admin.findByIdAndUpdate(req.params.id, { firstname, lastname, email });
    return res.json("Admin updated");
  } catch (err) {
    return res.json(err.errors);
  }
}

async function destroy(req, res) {
  await Admin.findByIdAndDelete(req.params.id);
  res.json("Admin removed");
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
