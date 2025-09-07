import express from "express";
import authRouter from "./routes/auth.route.js";
import itemRouter from "./routes/item.route.js";
import cartRouter from "./routes/cart.route.js";
import orderRouter from "./routes/order.route.js";
import addressRouter from "./routes/address.route.js";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import connectDB from "./database/db.js";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/items", itemRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/addresses", addressRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async() => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});
