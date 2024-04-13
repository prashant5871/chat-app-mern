import express from "express"
import { getOtherUsers, login, logout, register,testApi } from "../controllers/userController.js"
import isAuthenticated from "../middleware/isAuthenticated.js"


const router = express.Router()


// router.post("/register",register);

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/").get(isAuthenticated,getOtherUsers)

router.route("/test").get(testApi);

export default router;
