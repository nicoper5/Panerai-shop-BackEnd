const express = require("express");
const seedersRouter = express.Router();
const seedersController = require("../controllers/seedersController");

seedersRouter.put("/reset", seedersController.reset);

module.exports = seedersRouter;
