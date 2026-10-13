import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
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
app.use(cors())
// await connectDB()

// app.post('/create-student',createStudent)
// app.post('/getfullname',getFullName)

// app.get('/get-students',findStudents)
// app.post('/find-fullname',findFullName)
// app.post('/login',login)
// app.post('/findStudentByEmail',findStudentByEmail)
// app.post('/createNewStudent',createNewStudent)
// // app.get('/findstudent',findStudent)
// // app.put('/updateAge',updateAge)
// // app.post('/create-course',studentCourse)
// // app.get('/getstudentdetails',studentDetails)
// app.post('/findStudentCourse',findStudentCourse)
// app.post('/create-subject',createSubjects)
// // app.post('/create-user',createUser)
// app.post('/getStudentData',getStudentData)

// const readable = fs.createReadStream('readme.txt')

// readable.on("data",(chunk)=>console.log(chunk.length
    
// ))

// app.get('/notification',(req,res)=>{
//     res.setHeader('Content-type','text/event-stream')
//     res.setHeader('Cache-control','no-cache')
//     res.setHeader('Connection','keep-alive')
    
//     let count = 1
//     const interval = setInterval(()=>{

//         res.write(`data:your notification:${count++}\n\n`)
//     },1000)
//     res.on('close',()=>clearInterval(interval))
// })



const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server is running at ${port}`))