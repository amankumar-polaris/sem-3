import mongoose from "mongoose";

const subjectsSchema = new mongoose.Schema({
    subjectname:String,
    duration:String
})

export const Subject = mongoose.model('Subject',subjectsSchema)