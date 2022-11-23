import { Router } from "express"
import { logIn, signUp } from "../controllers/user.controller.js"
import { loginValidation } from "../middlewares/userLoginValidation.middleware.js"
import { signUpValidation } from "../middlewares/userSignupValidation.middleware.js"

const router = Router()

router.post("/login", loginValidation, logIn)
router.post("/signup", signUpValidation, signUp)

export default router