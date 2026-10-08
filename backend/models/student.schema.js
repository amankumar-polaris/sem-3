import mongoose from "mongoose"
import bcrypt from 'bcrypt'
import { minLength, trim } from "zod"

const studentSchema = new mongoose.Schema({
    firstname:{
        type:String,
        minLength:[3,'Please enter the name'],
trim:1
    },
    lastname:String,
    skills:[String],
    email:String,
    password:String,
    age:Number,
    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'StudentCourse'
        }
    ]
})

// studentSchema.pre('save',async function(){
//     this.password = await bcrypt.hash(this.password,10)
// })

// studentSchema.post('save',function(){
//     console.log('user added')
// })

// studentSchema.virtual('fullname').get(function() {
//     return `${this.firstname} ${this.lastname}`
// })

// studentSchema.methods.comparePassword = async function(password) {
//     return await bcrypt.compare(password,this.password)
// }

// studentSchema.statics.findByEmail = async function(email) {
//     return await this.findOne({email})
// }
export const Student = mongoose.model('Student',studentSchema)