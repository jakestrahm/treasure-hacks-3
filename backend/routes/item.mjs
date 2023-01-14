import express from "express";
const router = express.Router();
router.get("/:id");
router.get("/");
router.post("/:id");
router.patch("/:id");
router.delete("/:id");
export default router;
