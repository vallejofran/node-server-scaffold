import { Router } from "express";
const router = Router();

import {
  createUser,
  getUsers,
  getUserById,
} from "../controllers/user-mogno-example.js";

router.post("/create-user", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);

export default router;
