import express from "express";
import {
  getAddresses,
  addAddress,
  updateAddress,
  deleteAddress
} from "../controllers/address.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const addressRouter = express.Router();

// Address Routes (user must be logged in)
addressRouter.get("/", protect, getAddresses);
addressRouter.post("/", protect, addAddress);
addressRouter.put("/:id", protect, updateAddress);
addressRouter.delete("/:id", protect, deleteAddress);

export default addressRouter;
