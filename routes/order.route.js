import express from "express";
import {
  placeOrder,
  getOrders,
  getOrderById,
  updateOrderStatus
} from "../controllers/order.controller.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const orderRouter = express.Router();

// User Routes
orderRouter.post("/", protect, placeOrder);
orderRouter.get("/", protect, getOrders);
orderRouter.get("/:id", protect, getOrderById);

// Admin Route
orderRouter.put("/:id/status", protect, admin, updateOrderStatus);

export default orderRouter;
