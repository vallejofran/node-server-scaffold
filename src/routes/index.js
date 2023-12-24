// routes.js
const express = require("express");
const router = express.Router();

const paths = {
  "/api/example": require("./example"),
  "/api/user-sequelize-example": require("./user-sequelize-example"),
  "/api/user-mongo-example": require("./user-mongo-example")
  "/api/generic-crud": require("./generic-rourtes-example"),
};

for (const [path, middleware] of Object.entries(paths)) {
  router.use(path, middleware);
}

module.exports = router;
