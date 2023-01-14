import express from "express";
const router = express.Router();

import {
  getAllAccounts,
  getAccountByID,
} from "../controllers/userController.mjs";

router.get("/", getAllAccounts);
router.get("/api/account/:id", getAccountByID);

export default router;
