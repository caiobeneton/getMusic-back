import { cartsCollection, sessionsCollection } from '../database/db.js'


export async function getCart(req, res) {
    const { token } = req.headers
    
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