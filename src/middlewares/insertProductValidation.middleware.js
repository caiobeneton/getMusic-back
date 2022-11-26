import { productsCollection } from "../database/db.js";
import { productSchema } from "../models/product.model.js";

export async function insertProductValidation(req, res, next) {
    const product = req.body;

    const { error } = productSchema.validate(product, { abortEarly: false })
    if (error) {
        const errors = error.map(details => details.message)
        return res.status(400).send(errors)
    }

    try {
        const productExists = await productsCollection.findOne({name: product.name})
        if(productExists){
            return res.status(409).send({message: "Produto já cadastrado"})
        }
    } catch (err) {

        console.log(err)
        res.send(500)
    }


    next()
}