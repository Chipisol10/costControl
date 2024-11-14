import  { Router } from "express";
import { allRegistrations, registrationsByUser } from "../controllers/registrations/readRegistrations.js";
import { createRegistrations } from "../controllers/registrations/createRegistrations.js";
import {updateRegistration} from "../controllers/registrations/updateRegistrations.js"
import { deleteRegistraons } from "../controllers/registrations/deleteRegistrations.js";



const router = Router()

router.get('/all',allRegistrations)
router.get('/registrations',registrationsByUser)

router.post('/registrationCreate', createRegistrations)
router.put('/registrationUpdate', updateRegistration)
router.delete('/registrationdelete', deleteRegistraons)



export default router