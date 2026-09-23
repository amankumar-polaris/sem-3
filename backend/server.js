import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db.config.js'
import { getFullName } from './controllers/user.controller.js'
import { createStudent, findFullName, findStudentByEmail, findStudents, login } from './controllers/student.controller.js'
import { createNewStudent } from './controllers/newStudent.controller.js'

dotenv.config()

const app = express()
app.use(express.json())

await connectDB()

app.post('/create-student',createStudent)
app.post('/getfullname',getFullName)

app.get('/get-students',findStudents)
app.post('/find-fullname',findFullName)
app.post('/login',login)
app.post('/findStudentByEmail',findStudentByEmail)
app.post('/createNewStudent',createNewStudent)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server is running at ${port}`))