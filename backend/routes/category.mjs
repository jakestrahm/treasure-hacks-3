import express from "express";
import {
  getCategory,
  getCategoryID,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.mjs";
const router = express.Router();

router.get("/", getCategory);
router.get("/:id", getCategoryID);
router.post("/:id", createCategory);
router.patch("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
