import joi from "joi-oid";

const schema = joi.object({
    name: joi.string().required().alphanum().min(2).max(20).messages({
        'string.base':"Please only letters",
        'string.alphanum':'Please do not use special characters',
        'string.min':'The name must be at least 2 characters long',
        'string.max':'The name must be a maximum of 22 characters',
         'string.empty':'Name Required'
    }),
    email:joi.string().email({tlds:{allow:false}}).required().messages({
        'string.email':'Must be a valid email'
    }),
    address:joi.string().required(),
    phone: joi.number().required(),
        
 
    password: joi.string().required(),
       
    
    online:joi.boolean().required(),
})

export default schema