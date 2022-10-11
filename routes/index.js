const publicRoutes = require("./publicRoutes");
const productRoutes = require("./productRoutes");
const adminRoutes = require("./adminRoutes");
const collectionRoutes = require("./collectionRoutes");
const orderRoutes = require("./orderRoutes");
const customerRoutes = require("./customerRoutes");
const seedersRouter = require("./seederRoutes");

module.exports = (app) => {
  app.use(publicRoutes);
  app.use("/products", productRoutes);
  app.use("/admins", adminRoutes);
  app.use("/collections", collectionRoutes);
  app.use("/orders", orderRoutes);
  app.use("/customers", customerRoutes);
  app.use("/seeders", seedersRouter);
};
