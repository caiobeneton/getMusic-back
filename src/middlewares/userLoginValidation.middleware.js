import { usersCollection } from "../database/db.js";
import bcrypt from "bcrypt"

export async function loginValidation(req, res, next){
    const {email, password} = req.body

    try {
        const user = await usersCollection.findOne({email})

        if (!user) {
            return res.sendStatus(401)
        }

        const passwordOk = bcrypt.compareSync(password, user.password)

        if (!passwordOk) {
            return res.sendStatus(401)
        }

    } catch (error) {
        res.sendStatus(500)
    }

    next()
}