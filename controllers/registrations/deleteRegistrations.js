import Registration from "../../models/Registration.js";

const deleteRegistraons = async (req, res, next) => {
    try {
        let registrationdelete = await Registration.deleteOne({
            _id: req.body._id
        })
        return res.status(200).json({
            response: registrationdelete
        })
    } catch (error) {
        next(error)
    }
}

export {deleteRegistraons}