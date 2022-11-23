import express from "express"
import cors from "cors"
import dotenv from "dotenv"

const app = express()
dotenv.config()
app.use(cors())
app.use(json())

app.listen(5000, () => console.log("Server running in port 5000"))