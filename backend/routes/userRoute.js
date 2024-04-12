import express from "express"
import { register,testApi } from "../controllers/userController.js"


const router = express.Router()


// router.post("/register",register);

router.route("/register").post(register)

router.route("/test").get(testApi);

export default router;
