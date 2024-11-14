import Property from "../../models/Property.js";
import Registration from "../../models/Registration.js";

const updateProperty = async (req, res, next) => {
    try {
        let propetyUpdate = req.body
        await Property.updateOne(
            {_id: propetyUpdate._id},
            {name: propetyUpdateUpdate.name} 
        )
        return res.status(200).json({
            response:registrationUpdate
        })
    } catch (error) {
        next(error)
    }
}

export { updateProperty }