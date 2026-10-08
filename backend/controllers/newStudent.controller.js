import mongoose from "mongoose"
import { StudentCourse } from "../models/course.schema.js"
import { NewStudent } from "../models/newStudent.schema.js"
import { Student } from "../models/student.schema.js"

export const createNewStudent = async(req,res)=>{
    const {studentname,subjectIds} = req.body


    await NewStudent.create({studentname:studentname,subjects:subjectIds})


    return res.status(200).json({ message:"new student onboarded!!!" })
}

export const getStudentData = async(req,res)=>{
    

    const student = await NewStudent.findById(req.body._id).populate('subjects')

    console.log(student,'std')
    res.json(student)
}
export const studentDetails = async(req,res)=>{
    const details = await NewStudent.aggregate([
        // {
            // $lookup:
            // {
            //     from: "studentcourses",
            //     localField: '_id',
            //     foreignField: 'studentId',
            //     as: 'course'
            // },
        // },
        // {
        //     $unwind:"$skills"
        // },
        {
            $bucket:
            {
                groupBy:"$age",
                boundaries:[0,5,20,30],
                default:30,
                output:
                {
                    studentCount:{$sum:1}
                }
            }
        }
    ])
    // const details = await StudentCourse.find()


    return res.json(details)
}

export const findStudentCourse = async(req,res)=>{
    try {

        const courses = await StudentCourse.findOne({studentId:req.body.studentId}).populate("studentId")
        return res.json(courses)
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
}