import express from "express";
import {
  // User Routes
  createUser,
  loginUser,
  logutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile,

  // Admin Routes
  deleteUserById
} from "../controllers/userController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

// Middlewares

const router = express.Router();

// User Routes
router
  .route("/")
  .post(createUser)
  .get(authenticate, authorizeAdmin, getAllUsers);
router.post("/auth", loginUser);
router.post("/logout", logutCurrentUser);
router
  .route("/profile")
  .get(authenticate, getCurrentUserProfile)
  .put(authenticate, updateCurrentUserProfile);

  // Admin Routes
  router.route('/:id').delete(authenticate, authorizeAdmin, deleteUserById)

export default router;
