import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema =new mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    password:String,
    email:String
})

// userSchema.pre('save',async function(){})
userSchema.pre('save',async function() {
    this.password = await bcrypt.hash(this.password,10)
})

userSchema.post('save',function(){
    console.log('user saved')
})

userSchema.virtual('fullname').get(function(){
    return this.firstName+" "+this.lastName
})
export const User = mongoose.model('User',userSchema)