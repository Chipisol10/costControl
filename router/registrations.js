import  { Router } from "express";
import { allRegistrations, registrationsByUser } from "../controllers/registrations/readRegistrations.js";
import { createRegistrations } from "../controllers/registrations/createRegistrations.js";
import {updateRegistration} from "../controllers/registrations/updateRegistrations.js"
import { deleteRegistraons } from "../controllers/registrations/deleteRegistrations.js";
import passport from "passport";



const router = Router()

router.get('/all', passport.authenticate('jwt', {session:false}), allRegistrations)
router.get('/registrations', passport.authenticate('jwt', {session:false}),registrationsByUser)
router.post('/registrationCreate', passport.authenticate('jwt', {session:false}), createRegistrations)
router.put('/registrationUpdate', passport.authenticate('jwt', {session:false}), updateRegistration)
router.delete('/registrationdelete', passport.authenticate('jwt', {session:false}), deleteRegistraons)



export default router