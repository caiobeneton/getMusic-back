import express from "express"
import cors from "cors"
import dotenv from "dotenv"

const app = express()
dotenv.config()
app.use(cors())
app.use(json())

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running in port ${port}`))