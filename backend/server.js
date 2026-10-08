import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db.config.js'
// import { createUser, getFullName } from './controllers/user.controller.js'
// import { createStudent, findFullName, findStudent, findStudentByEmail, findStudents, login, updateAge } from './controllers/student.controller.js'
import { createNewStudent, findStudentCourse, getStudentData, studentDetails} from './controllers/newStudent.controller.js'
// import { studentCourse } from './controllers/studentCourse.controller.js'
import fs from 'fs'
import { createSubjects } from './controllers/subject.controller.js'

dotenv.config()

const app = express()
app.use(express.json())

await connectDB()

// app.post('/create-student',createStudent)
// app.post('/getfullname',getFullName)

// app.get('/get-students',findStudents)
// app.post('/find-fullname',findFullName)
// app.post('/login',login)
// app.post('/findStudentByEmail',findStudentByEmail)
app.post('/createNewStudent',createNewStudent)
// app.get('/findstudent',findStudent)
// app.put('/updateAge',updateAge)
// app.post('/create-course',studentCourse)
// app.get('/getstudentdetails',studentDetails)
app.post('/findStudentCourse',findStudentCourse)
app.post('/create-subject',createSubjects)
// app.post('/create-user',createUser)
app.post('/getStudentData',getStudentData)

// const readable = fs.createReadStream('readme.txt')

// readable.on("data",(chunk)=>console.log(chunk.length
    
// ))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server is running at ${port}`))