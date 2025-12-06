import express from "express";
const router = express.Router();
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

router.route("/").report(createCategory);

export default router;
