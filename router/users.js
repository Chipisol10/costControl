import  { Router } from "express";
import {allUser, userByName, userById} from "../controllers/users/read.js";
import { create } from "../controllers/users/create.js";
import { update } from "../controllers/users/update.js";
import { deleteUser } from "../controllers/users/delete.js";




const router = Router()

router.get('/all',allUser)
router.get('/name/:name',userByName)
router.get('/id/:id',userById)
router.post('/create',create)
router.put('/update',update)
router.delete('/deleteUserOne',deleteUser)


export default router