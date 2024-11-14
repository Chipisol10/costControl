import joi from "joi-oid";

const schema = joi.object({
    name: joi.string().required().alphanum().messages({
        'string.base':"Please only letters",
        'string.alphanum':'Please do not use special characters',
        'string.empty':'Name Required'
    }),
    type:joi.string().required(),
    value:joi.number().required().positive().message({
        'number.base': 'The value must be a number', 
        'number.positive': 'The value must be positive',
    }),
    user:joi.objectId().required().message({
        'any.required': 'User ID is required',
    })
})

export default schema