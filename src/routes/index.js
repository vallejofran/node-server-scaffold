// routes.js
import { Router } from "express";
const router = Router();

import exampleRoutes from "./example.js";
import sequeliezeRoutes from "./user-sequelize-example.js";
import mongoRoutes from "./user-mongo-example.js";
import genericRoutes from "./generic-rourtes-example.js";

const paths = {
  "/api/example": exampleRoutes,
  "/api/user-sequelize-example": sequeliezeRoutes,
  "/api/user-mongo-example": mongoRoutes,
  "/api/generic-crud": genericRoutes,
};

for (const [path, middleware] of Object.entries(paths)) {
  router.use(path, middleware);
}

export default router;
