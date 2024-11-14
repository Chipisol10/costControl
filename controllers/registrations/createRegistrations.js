import Registration from "../../models/Registration.js";

let createRegistrations = async (req,res,next) => {
    try {
        let registrationCreate = req.body
        let all = await Registration.create(registrationCreate)
        return res.status(201).json({
            response:all
        })
        
    } catch (error) {
        next(error)
    }
}

export { createRegistrations }