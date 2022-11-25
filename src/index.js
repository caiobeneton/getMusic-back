import express, { json } from "express"
import cors from "cors"
import dotenv from "dotenv"
import userRoutes from "./routes/user.routes.js"
import transactionsRoutes from "./routes/transaction.routes.js"

const app = express()
dotenv.config()
app.use(cors())
app.use(json())

app.use(userRoutes)
app.use(transactionsRoutes)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running in port ${port}`))