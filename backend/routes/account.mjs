import express from "express";
const router = express.Router();

router.get("/");
router.get("/:id");

router.patch("/:id");
router.post("/:id");

export default router;
