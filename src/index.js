import express, { json } from "express"
import cors from "cors"
import dotenv from "dotenv"
import userRoutes from "./routes/user.routes.js"
import transactionsRoutes from "./routes/transaction.routes.js"
import productsRoutes from "./routes/product.routes.js"
import cartsRoutes from "./routes/carts.routes.js"

const app = express()
dotenv.config()
app.use(cors())
app.use(json())

app.use(userRoutes)
app.use(transactionsRoutes)
app.use(productsRoutes)
app.use(cartsRoutes)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running in port ${port}`))