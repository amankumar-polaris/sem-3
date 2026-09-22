import { User } from "../models/user.schema.js"

export const createUser = async(req,res)=>{
    const {firstName,lastName,email,password,age} = req.body
    await User.create({firstName,lastName,email,password,age})

    return res.status(201).json({message:'User created succesfully!!!'})
}

export const getFullName = async(req,res)=>{
    const user = await User.findOne({email:req.body.email})

    return res.json({fullname:user.fullname})
}