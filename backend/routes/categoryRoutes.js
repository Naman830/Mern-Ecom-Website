import express from "express";
const router = express.Router();
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import { createCategory, updateCategory, removeCategory } from "../controllers/categoryController.js";


router.route("/").post(authenticate, authorizeAdmin, createCategory);
router.route("/:categoryId").put(authenticate, authorizeAdmin, updateCategory)
router.route("/:categoryId").delete(authenticate, authorizeAdmin, removeCategory)


export default router;
