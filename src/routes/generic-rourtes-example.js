import { Router } from "express";
const router = Router();

import controller from "../controllers/generic-crud-controller.js";

router.get("/:model", controller.get.bind(controller));
router.get("/:model/:id", controller.getById.bind(controller));
router.post("/:model", controller.create.bind(controller));
router.put("/:model/:id", controller.updateById.bind(controller));
router.delete("/:model/:id", controller.deleteById.bind(controller));

export default router;
