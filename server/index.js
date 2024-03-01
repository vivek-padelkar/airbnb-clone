import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import userRoute from './routes/user.routes.js'
import cors from 'cors'
import { connedctDb } from './db/dbconfig.js'

const app = express()
app.use(cors())
app.use(express.json())

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// Construct the path to the .env file
const envPath = path.resolve(__dirname, './.env')
dotenv.config({ path: envPath })

const PORT = process.env.PORT
const BASE_PATH = process.env.BASE_PATH

connedctDb()

app.use(`${BASE_PATH}/user`, userRoute)
app.listen(PORT, () => {
  console.log('api server is running on PORT: ' + process.env.PORT)
})
