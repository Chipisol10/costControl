import  { Router } from "express";
import { allRegistrations, registrationsByUser } from "../controllers/registrations/readRegistrations.js";


const router = Router()

router.get('/all',allRegistrations)
router.get('/registrations',registrationsByUser)



export default router