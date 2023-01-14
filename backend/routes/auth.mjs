import express from "express";
const router = express.Router();

router.post("/tokens");
router.post("/revoke");

export default router;
