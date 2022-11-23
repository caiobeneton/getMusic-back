import { usersSchema } from "../models/user.model.js";
import { usersCollection } from "../database/db.js";

export async function signUpValidation(req, res, next) {
    const user = req.body

    const {error} = usersSchema.validate(user, { abortEarly: false})

    if (error) {
        const errors = error.details.map((detail) => detail.message)

        return res.status(400).send(errors)
    }

    try {
        const userExists = await usersCollection.findOne({email: user.email})

        if (userExists) {
            return res.status(409).send({message: "Este email já está cadastrado!"})
        }
    } catch (error) {
        res.sendStatus(500)
    }

    next()
}