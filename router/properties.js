import  { Router } from "express";
import { allProperties } from "../controllers/properties/readProperties.js";
import { createProperty } from "../controllers/properties/createProperties.js";
import {updateProperty} from "../controllers/properties/updateProperties.js"
import { deleteProperty } from "../controllers/properties/deleteProperties.js";
import passport from "passport";



const router = Router()

router.get('/all', passport.authenticate('jwt', {session:false}), allProperties)
router.post('/propertyCreate', passport.authenticate('jwt', {session:false}), createProperty)
router.put('/propertyUpdate',passport.authenticate('jwt', {session:false}), updateProperty)
router.delete('/propertydelete',passport.authenticate('jwt', {session:false}), deleteProperty)



export default router