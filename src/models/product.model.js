import joi from "joi"

export const productSchema = joi.object({
    name: joi.string().required().min(8),
    price: joi.Number().required(),
    category: joi.string().required().min(4),
    description: joi.string().required(),
    amount: joi.Number().required()
})