import { productsCollection } from "../database/db.js";
import { transactionSchema } from "../models/transaction.model.js";

export async function transactionValidation(req, res, next) {
    const transaction = req.body
    const { productId } = transaction


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