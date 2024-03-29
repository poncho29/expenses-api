// import "dotenv/config"
import express from "express"
import cors from "cors"

import routerApi from './routes'
import { boomErrorHandler, errorHandler, logErrors } from "./middlewares/errorHandler"

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())

app.use(express.json())

// Router
routerApi(app)

// Middleware errors
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`application listening on port ${PORT}`)
})
