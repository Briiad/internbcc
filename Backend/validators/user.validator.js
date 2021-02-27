const Joi = require('joi')

const registerSchema = Joi.object().keys({
    email: Joi.string()
        .email({minDomainSegments: 2, 
            tlds: {
                allow: ['com', 'net']}
            })
        .required(),

    name: Joi.string()
        .regex(/^[a-z A-Z]+$/)
        .min(3)
        .max(20)
        .required(),

    password: Joi.string()
        .alphanum()
        .min(8)
        .pattern(new RegExp('^[a-zA-Z0-9]'))
        .required()
        .strict()
})

module.exports = {
    "register": registerSchema
}