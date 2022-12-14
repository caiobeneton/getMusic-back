import joi from 'joi'

export const transactionSchema = joi.object({
    userName: joi.string().required().min(3),
    email: joi.string().email().required().min(8),
    cardData: joi.object({
        front: joi.number().required().min(16),
        back: joi.number().required().min(3).max(4),
        expiringDate: joi.string().required()
    }),
    productId: joi.string().required()

})