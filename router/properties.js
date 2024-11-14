import  { Router } from "express";
import { allProperties } from "../controllers/properties/readProperties.js";
import { createProperty } from "../controllers/properties/createProperties.js";
import {updateProperty} from "../controllers/properties/updateProperties.js"
import { deleteProperty } from "../controllers/properties/deleteProperties.js";



const router = Router()

router.get('/all',allProperties)
router.post('/propertyCreate', createProperty)
router.put('/propertyUpdate', updateProperty)
router.delete('/propertydelete', deleteProperty)



export default router