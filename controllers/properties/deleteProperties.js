import Property from "../../models/Property.js";

const deleteProperty = async (req, res, next) => {
    try {
        let propertydelete = await Property.deleteOne({
            _id: req.body._id
        })
        return res.status(200).json({
            response: propertydelete
        })
    } catch (error) {
        next(error)
    }
}

export {deleteProperty}