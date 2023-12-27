// routes.js
import { Router } from "express";
const router = Router();

import exampleRoutes from "./example.js";
import userRoutes from "./user-example.js";
import genericRoutes from "./generic-rourtes-example.js";

const paths = {
  "/api/example": exampleRoutes,
  "/api/user-example": userRoutes,
  "/api/generic-crud": genericRoutes,
};

for (const [path, middleware] of Object.entries(paths)) {
  router.use(path, middleware);
}

export default router;
