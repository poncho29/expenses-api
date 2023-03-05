import "dotenv/config"
import express from "express"
import cors from "cors"

import routerApi from './routes'
import { initDb } from './db/init'

const app = express()

// Authenticate database
initDb()

app.use(cors())

app.use(express.json())

routerApi(app)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`application listening on port ${PORT}`)
})
