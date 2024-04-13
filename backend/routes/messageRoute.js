import express from "express"
import isAuthenticated from "../middleware/isAuthenticated.js";
import { sendMessage } from "../controllers/messageController.js";


const router = express.Router();

router.route("/send/:id").post(isAuthenticated,sendMessage)

export default router;