import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import accountNoExist from "../middlewares/accountNoExist.js";
import isValidadPassword from "../middlewares/isValidadPassword.js";
import generateToken from "../middlewares/generateToken.js";

const router = Router()

router.post('/signIn',accountNoExist,isValidadPassword,generateToken,signIn)

export default router