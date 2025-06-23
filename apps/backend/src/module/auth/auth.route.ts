import express from "express";
import { validateRequest } from "../../app/middleWares/validationRequest";
import { AuthValidationSchema } from "./auth.validation";
import { AuthController } from "./auth.controller";

const router = express.Router();

router.post('/signup',
    validateRequest(AuthValidationSchema.signupMemberSchema),
    AuthController.signup
)

router.post('/login',
    validateRequest(AuthValidationSchema.loginSchema),
    AuthController.login
)

export const AuthRoutes = router