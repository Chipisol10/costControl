import joi from "joi-oid";

const schema = joi.object({
    date: joi.date().required(),
    description:joi.string().required(),
    value:joi.number().required(),
    activo:joi.boolean().required(),
    user:joi.objectId().required()
})

export default schema