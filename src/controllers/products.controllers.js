import { productsCollection } from "../database/db.js";
import { v4 as uuidV4 } from "uuid";

export async function insertNewProduct(req, res){
    const newProduct = req.body
    const token = uuidV4()

    try {
        await productsCollection.insertOne({...newProduct, token})
        res.sendStatus(201)

    } catch (err){
        console.log(err)
        res.sendStatus(500)
    }
}

export async function getProducts(req, res){
    try {
       const products = await productsCollection.find().toArray()
       res.send(products)
    } catch (error) {
        res.sendStatus(500)
    }
}