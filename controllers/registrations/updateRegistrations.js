import Registration from "../../models/Registration.js";

const updateRegistration = async (req, res, next) => {
    try {
        let registrationUpdate = req.body
        await Registration.updateOne(
            {_id: registrationUpdate._id},
            {date: registrationUpdate.date} 
        )
        return res.status(200).json({
            response:registrationUpdate
        })
    } catch (error) {
        next(error)
    }
}

export { updateRegistration }