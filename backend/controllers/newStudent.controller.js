import { NewStudent } from "../models/newStudent.schema.js"

export const createNewStudent = async(req,res)=>{
    const {firstname,lastname,email,skills,profession,password,isFresher} = req.body

    await NewStudent.create({firstname,lastname,email,skills,profession,password,isFresher})

    return res.status(200).json({message:"new student onboarded!!!"})
}