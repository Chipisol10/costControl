import Registration from "../../models/Registration.js"
import  "../../models/Registration.js";

let allRegistrations = async (req,res,next)=> {
    try {
       
        let all = await Registration.find()
        return res.status(200).json({
            response:all
        })
    } catch (error){
        return res.status(500).json({
            response:error
        })
    }
}

let registrationsByUser = async (req, res, next) => {
    try {
        let id_user = req.params.id_user;

        let registrations = await Registration.find({ id_user }).populate('users', 'name email phone').exec();
        
        if (!registrations || registrations.length === 0) {
            return res.status(404).json({ message: "No invoices found for this user" });
        }

        return res.status(200).json({
            response: registrations
        });
    } catch (error) {
        next(error);
    }
};

export { allRegistrations, registrationsByUser }