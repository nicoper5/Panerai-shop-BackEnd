const express = require("express");
const orderRouter = express.Router();
const orderController = require("../controllers/orderController");
const { expressjwt } = require("express-jwt");

orderRouter.get(
  "/",
  expressjwt({ secret: process.env.ADMIN_ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }),
  orderController.index,
); //implementar filtros
orderRouter.get(
  "/by-customer",
  expressjwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }),
  orderController.showByCustomer,
);
orderRouter.get(
  "/latest",
  expressjwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }),
  orderController.showLatest,
);
orderRouter.get("/:id", orderController.show);
orderRouter.post(
  "/",
  expressjwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }),
  orderController.store,
);
orderRouter.patch("/:id", orderController.update);
orderRouter.patch("/change-status/:id", orderController.update); //las dos funcionalidades se resumen en una sola ruta

module.exports = orderRouter;
