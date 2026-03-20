// Always have to import express in router file again
import express from "express";
import { getMe, login, logoutUser, registerUser, verifyUser, forgotPassword, resetPassword} from "../controller/user_controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const router = express.Router()     //through this router able to get diff routes

router.post("/register", registerUser) //(route, uss route p kya karo)
router.get("/verify/:token", verifyUser)
router.post("/login", login)
router.get("/profile",isLoggedIn, getMe)
router.get("/logout", isLoggedIn, logoutUser)
router.post("/forgot", forgotPassword)
router.get("/reset/:resetToken", resetPassword)

export default router