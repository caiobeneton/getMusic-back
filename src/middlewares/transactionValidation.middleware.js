import { productsCollection } from "../database/db.js";
import { transactionSchema } from "../models/transaction.model.js";

export async function transactionValidation(req, res, next) {
    const transaction = req.body
    const { productId } = transaction


    const { error } = transactionSchema.validate(transaction, { abortEarly: false })

    if (error) {
        const errors = error.details.map((detail) => detail.message)
        return res.status(400).send(errors)
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