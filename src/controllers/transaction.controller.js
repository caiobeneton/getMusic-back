import { productsCollection, transactionsCollection, usersCollection } from "../database/db.js";

export async function purcharse(req, res) {
    const transaction = req.body
    const { email, productId } = transaction
    try {
        const product = await productsCollection.findOne({ productId })
        const user = await usersCollection.findOne({ email })

        const transactionToPost = {
            ...transaction,
            clientId: user._id,
            productId: product,_id,
            productName: product.name
        }
        
        await transactionsCollection.insertOne(transactionToPost)


        res.sendStatus(201)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }

}