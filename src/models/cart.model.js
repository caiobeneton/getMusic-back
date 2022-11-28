import joi from "joi"

export const cartSchema = joi.object({
    userId: joi.string().required(),
    content: joi.array().required(),
    subTotal: joi.number()
})