const { expressjwt } = require("express-jwt");

module.exports = {
  checkAuth: () => expressjwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }),
};
