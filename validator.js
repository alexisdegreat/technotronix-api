const Joi = require("joi")


const validator = (schema) => (payload)=> schema.validate(payload)

const categorySchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string()
});

const productSchema = Joi.object({
    category: Joi.string().required(),
    name: Joi.string().required(),
    img: Joi.string().required(),
    price: Joi.string().required(),
    feartured: Joi.boolean(),
    topselling: Joi.boolean()
});

exports.validateCategory = validator(categorySchema)
exports.validateProduct = validator(productSchema) 