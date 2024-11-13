import  { Router } from "express";
import usersRouter from './users.js';
import registrationsRouter from './registrations.js'

const router = Router()

router.use('/users',usersRouter)
router.use('/registrations',registrationsRouter)


export default router