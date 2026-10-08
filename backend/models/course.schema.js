import mongoose from 'mongoose'

const studentCourseSchema = new mongoose.Schema({
    coursename: String,
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NewStudent'
    }
})

export const StudentCourse = mongoose.model('StudentCourse', studentCourseSchema)