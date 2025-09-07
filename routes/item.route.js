import express from "express";
import {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
} from "../controllers/item.controller.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const itemRouter = express.Router();

// Public Routes
itemRouter.get("/", getItems);
itemRouter.get("/:id", getItemById);

// Admin Routes
itemRouter.post("/", protect, admin, createItem);
itemRouter.put("/:id", protect, admin, updateItem);
itemRouter.delete("/:id", protect, admin, deleteItem);

export default itemRouter;
