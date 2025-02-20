import express from "express";
import { config } from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";

config();

connectDB()

const app = express();

// globally
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use("/api/products", productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta.bold)
);
