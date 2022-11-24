import { productsCollection } from "../database/db";
import { transactionSchema } from "../models/transaction.model";

export async function transactionValidation(req, res, next) {
    const { name, email, cardData, productId } = req.body
    const transaction = { name, email, cardData, productId }

    const { error } = transactionSchema.validation(transaction, { abortEarly: false })

    if (error) {
        const errors = error.map((detail) => detail.message)
        res.status(400).send(errors)
    }

    try {
        const productExists = await productsCollection.findOne({ _id: productId })

        if (!productExists) {
            return res.sendStatus(401)
        }

    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }


    next()
}