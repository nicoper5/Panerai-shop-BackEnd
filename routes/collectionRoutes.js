const express = require("express");
const { expressjwt } = require("express-jwt");
const collectionRouter = express.Router();
const collectionController = require("../controllers/collectionController");

collectionRouter.get("/", collectionController.index);
collectionRouter.get("/:slug", collectionController.show);
collectionRouter.use(
  expressjwt({ secret: process.env.ADMIN_ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }),
);
collectionRouter.post("/", collectionController.store);
collectionRouter.patch("/push-product/:id", collectionController.pushProduct);
collectionRouter.patch("/:slug", collectionController.update);
collectionRouter.delete("/:id", collectionController.destroy);

module.exports = collectionRouter;
