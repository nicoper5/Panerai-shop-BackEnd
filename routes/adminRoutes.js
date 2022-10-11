const express = require("express");
const { expressjwt } = require("express-jwt");
const adminRouter = express.Router();
const adminController = require("../controllers/adminController");

adminRouter.use(
  expressjwt({ secret: process.env.ADMIN_ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }),
);

adminRouter.get("/", adminController.index);
adminRouter.get("/:id", adminController.show);
adminRouter.post("/", adminController.store);
adminRouter.patch("/:id", adminController.update);
adminRouter.delete("/:id", adminController.destroy);

module.exports = adminRouter;
