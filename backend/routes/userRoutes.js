import express from "express";
import {createUser, loginUser, logutCurrentUser, getAllUsers} from "../controllers/userController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

// Middlewares


const router = express.Router();

router.route("/").post(createUser).get(authenticate, authorizeAdmin, getAllUsers);
router.post('/auth', loginUser);
router.post('/logout', logutCurrentUser)

export default router;
