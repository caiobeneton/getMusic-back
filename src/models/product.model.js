import joi from "joi"

export const productSchema = joi.object({
    name: joi.string().required().min(3),
    price: joi.number().required(),
    category: joi.string().required().min(4),
    description: joi.string().required(),
    amount: joi.number().required()
})