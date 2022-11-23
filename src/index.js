import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(json())

app.listen(5000, () => console.log("Server running in port 5000"))