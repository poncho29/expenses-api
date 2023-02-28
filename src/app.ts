import "dotenv/config"
import express from "express"
import cors from "cors"

const app = express()

app.use(cors())

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`application listening on port ${PORT}`)
})