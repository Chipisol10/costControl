import Property from "../../models/Property.js";

let createProperty = async (req,res,next) => {
    try {
        let propertyCreate = req.body
        let all = await Property.create(propertyCreate)
        return res.status(201).json({
            response:all
        })
        
    } catch (error) {
        next(error)
    }
}

export { createProperty }