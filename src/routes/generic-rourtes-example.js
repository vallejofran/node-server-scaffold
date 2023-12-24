const { Router } = require("express");
const router = Router();

const controller = require("../controllers/generic-crud-controller");

router.get("/:model", controller.get.bind(controller));
router.get("/:model/:id", controller.getById.bind(controller));
router.post("/:model", controller.create.bind(controller));
router.put("/:model/:id", controller.updateById.bind(controller));
router.delete("/:model/:id", controller.deleteById.bind(controller));

module.exports = router;
