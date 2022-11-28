import { cartsCollection, productsCollection, sessionsCollection } from '../database/db.js'


export async function getCart(req, res) {
    const { authorization } = req.headers
    const token = authorization.replace('Bearer: ', '')
    
    try {
        const session = await sessionsCollection.findOne({token})
        const userId = session._id

        if(!userId){
            return res.sendStatus(401).send({message: "Erro: usuário não encontrado"})
        }
        const cart = await cartsCollection.findOne({userId})

        res.send(cart)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export async function postCart(req, res){
    const { authorization } = req.headers
    const token = authorization.replace('Bearer: ', '')
    const itemID = req.body

    if (!token) {
        return res.sendStatus(401).send({message: "Você precisa estar logado para adicionar ao carrinho"})
    }

    try {
        const session = await sessionsCollection.findOne({token})
        const userId = session._id
        const cart = await cartsCollection.findOne({userId})
        const product = await productsCollection.findOne({_id: itemID})
        cart.content.push(product)

        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
}