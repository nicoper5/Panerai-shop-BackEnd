const express = require("express");
const publicRouter = express.Router();
const adminAuthController = require("../controllers/adminAuthcontroller");
const customerAuthController = require("../controllers/customerAuthcontroller");
const publicController = require("../controllers/publicController");

publicRouter.get("/", (req, res) => res.json("welcome to the hackshop API"));
publicRouter.post("/admin-login", adminAuthController);
publicRouter.post("/customer-login", customerAuthController);
publicRouter.post("/register", publicController.store);

module.exports = publicRouter;
