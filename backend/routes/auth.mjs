import express from "express";
import { createAuth, createRevoke } from "../controllers/auth.mjs";
const router = express.Router();

router.post("/tokens", createAuth);
router.post("/revoke", createRevoke);

export default router;
