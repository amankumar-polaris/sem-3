import mongoose from "mongoose";
import { Student } from "./student.schema.js";
import bcrypt from 'bcrypt'

const newStudentSchema = new mongoose.Schema({
    studentname:String,
    subjects:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Subject"
        }
    ]
})

export const NewStudent = mongoose.model('NewStudent',newStudentSchema)