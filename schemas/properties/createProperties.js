import joi from "joi-oid";

const schema = joi.object({
    name: joi.string().required().alphanum().messages({
        'string.base':"Please only letters",
        'string.alphanum':'Please do not use special characters'
    }),
    type:joi.string().required(),
    value:joi.number().required(),
    user:joi.objectId().required()
})

export default schema