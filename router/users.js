import  { Router } from "express";
import {allUser, userByName, userById} from "../controllers/users/read.js";
import { register } from "../controllers/users/register.js";
import { update } from "../controllers/users/update.js";
import { deleteUser } from "../controllers/users/delete.js";
import validator from "../middlewares/validator.js"
import schemaUsersCreated from "../schemas/users/create.js"
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import passport from "../middlewares/passport.js";




const router = Router()

router.get('/all',passport.authenticate('jwt',{session:false}),allUser)
router.get('/name/:name',userByName)
router.get('/id/:id',userById)
router.post('/register',validator(schemaUsersCreated),accountExists,createHash,register)
router.put('/update',update)
router.delete('/deleteUserOne',deleteUser)


export default router