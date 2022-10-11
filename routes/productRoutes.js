const express = require("express");
const { expressjwt } = require("express-jwt");
const productRouter = express.Router();
const productController = require("../controllers/productController");

productRouter.get("/", productController.index);
productRouter.get("/:slug", productController.show);
productRouter.use(
  expressjwt({ secret: process.env.ADMIN_ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }),
);
productRouter.post("/", productController.store);
productRouter.patch("/:slug", productController.update);
productRouter.delete("/:id", productController.destroy);

module.exports = productRouter;
