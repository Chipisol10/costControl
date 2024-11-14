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
   phone: joi.string().pattern(/^\d{10}$/).required().messages({
        'string.pattern.base': 'The phone must have exactly 10 digits'
    }),
    password: joi.string().required().min(8).pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/).messages({
        'string.min': 'Password must be at least 12 characters long',
        'string.pattern.base': 'The password must include at least one letter, a number and a special character'
    }),    
    online:joi.boolean().required(),
})

export default schema