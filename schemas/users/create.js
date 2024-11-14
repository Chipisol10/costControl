import joi from "joi-oid";

const schema = joi.object({
    name: joi.string().required().alphanum().messages({
        'string.base':"Por favor solo ingresar letras",
        'string.alphanum':'No uses caracteres Especiales'
    }),
    email:joi.string().required(),
    address:joi.string().required(),
    phone:joi.number().required(),
    password:joi.string().required(),
    online:joi.boolean().required(),
})

export default schema