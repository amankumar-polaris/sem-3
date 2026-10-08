import { StudentCourse } from "../models/course.schema.js"

export const studentCourse = async(req,res)=>{
    const {coursename,studentId} = req.body

    await StudentCourse.create({coursename,studentId})

    return res.status(201).json({message:"course created!!"})
}

