import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db.config.js'
import { createUser, getFullName } from './controllers/user.controller.js'

dotenv.config()
const app = express()
app.use(express.json())
connectDB()

app.post('/create-user',createUser)
app.post('/getfullname',getFullName)
app.listen(process.env.PORT,()=>console.log(`server is runnning at ${process.env.PORT}`))