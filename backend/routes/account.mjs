import express from "express";
import {
  createAccount,
  getAccount,
  updateAccount,
} from "../controllers/account.mjs";
const router = express.Router();

router.get("/", getAccount);

router.patch("/", updateAccount);
router.post("/", createAccount);

export default router;
