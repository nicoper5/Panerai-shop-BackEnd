const mongoose = require("../db");

const Admin = require("./Admin")(mongoose);
const Customer = require("./Customer")(mongoose);
const Collection = require("./Collection")(mongoose);
const Product = require("./Product");
const Order = require("./Order");

module.exports = { Admin, Customer, Collection, Product, Order };
