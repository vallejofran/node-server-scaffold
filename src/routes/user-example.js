import { Router } from "express";
const router = Router();

import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user-example.js";

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/create-user", createUser);
router.put("/update-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);

export default router;
