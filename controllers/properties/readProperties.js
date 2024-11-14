import Property from "../../models/Property.js"
import  "../../models/Property.js";

let allProperties = async (req,res,next)=> {
    try {
       
        let all = await Property.find()
        return res.status(200).json({
            response:all
        })
    } catch (error){
        return res.status(500).json({
            response:error
        })
    }
};




export { allProperties }