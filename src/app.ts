import "dotenv/config"
import express from "express"
import cors from "cors"

import routerApi from './routes'
import { initDb } from './db/init'
import { errorHandler, logErrors } from "./middlewares/errorHandler"

const app = express()

// Authenticate database
initDb()

app.use(cors())

app.use(express.json())

// Router
routerApi(app)

// Middleware errors
app.use(logErrors)
app.use(errorHandler)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`application listening on port ${PORT}`)
})
