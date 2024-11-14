import joi from "joi-oid";

const schema = joi.object({
    name: joi.string().required().alphanum().messages({
        'string.base':"Please only letters",
        'string.alphanum':'Please do not use special characters'
    }),
    email:joi.string().required(),
    address:joi.string().required(),
    phone:joi.number().required().min(9).max(11).messages({
        'number.min':'Minimos son 9 digitos',
        'number.max':'Maximo son 11 digitos'
    }),
    password:joi.string().required(),
    online:joi.boolean().required(),
})

export default schema