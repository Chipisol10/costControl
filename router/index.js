import  { Router } from "express";
import usersRouter from './users.js';
import registrationsRouter from './registrations.js'
import propertiesRouter from './properties.js'
import auth from './auth.js'

const router = Router()

router.use('/users',usersRouter)
router.use('/registrations',registrationsRouter),
router.use('/properties',propertiesRouter)
router.use('/auth',auth)


export default router