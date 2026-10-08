import { validatInfo } from "../middleware/validate.js"
import { User } from "../models/user.schema.js"

export const createUser = async(req,res)=>{
    // const {firstName,lastName,email,password,age} = req.body

    console.log(req.body)
    const {data,error} = validatInfo.safeParse(req.body)

    if(error)
        return res.json(error.issues[0].message)
   

    // res.json(data)
    await User.create(data)

    return res.status(201).json({message:'User created succesfully!!!'})
}

export const getFullName = async(req,res)=>{
    const user = await User.findOne({email:req.body.email})

    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }

    return res.json({fullname:user.fullname})
}