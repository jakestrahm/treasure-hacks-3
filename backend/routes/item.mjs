import express from "express";
import {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/item.mjs";
const router = express.Router();
router.get("/:id", getItem);
router.get("/", getItems);
router.post("/:id", createItem);
router.patch("/:id", updateItem);
router.delete("/:id", deleteItem);
export default router;
