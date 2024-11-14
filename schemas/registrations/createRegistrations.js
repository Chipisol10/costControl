import joi from "joi-oid";

const schema = joi.object({
    date: joi.date().required().max('now').message({
        'date.max':'The date cannot be future',
        'date.base':'The date must be valid'
    }),
    description:joi.string().required().pattern(/^[a-zA-Z0-9\s,#-]+$/).min(5).max(100).messages({
        'string.min':'The description must be at least 5 characters long',
        'string.max': 'The description must be a maximum of 80 characters',
        'string.pattern.base': 'The description may only contain letters, numbers and some special characters (#, -, ,)'
    }),
    value:joi.number().required().positive().message({
        'number.base': 'The value must be a number', 
        'number.positive': 'The value must be positive',
    }),
    activo:joi.boolean().required(),
    user:joi.objectId().required().message({
        'any.required': 'User ID is required',
    })
})

export default schema