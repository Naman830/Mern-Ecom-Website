import express from "express";
import {createUser, loginUser, logutCurrentUser} from "../controllers/userController.js";

const router = express.Router();

router.route("/").post(createUser);
router.post('/auth', loginUser);
router.post('/logout', logutCurrentUser)

export default router;
