import mongoose from "mongoose";
import { Student } from "./student.schema.js";
import bcrypt from 'bcrypt'

const newStudentSchema = new mongoose.Schema({
    isFresher:Boolean
})

export const NewStudent = Student.discriminator('NewStudent',newStudentSchema)