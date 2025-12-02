// packages
import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// Utils
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRoutes);

app.listen(port, () => console.log(`Server Running on Port : ${port}`));
