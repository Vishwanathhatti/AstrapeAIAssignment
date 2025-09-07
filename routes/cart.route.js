import express from "express";
import {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
  clearCart
} from "../controllers/cart.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const cartRouter = express.Router();

// Cart Routes (user must be logged in)
cartRouter.get("/", protect, getCart);
cartRouter.post("/add", protect, addToCart);
cartRouter.put("/update/:itemId", protect, updateCartItem);
cartRouter.delete("/remove/:itemId", protect, removeCartItem);
cartRouter.delete("/clear", protect, clearCart);

export default cartRouter;
