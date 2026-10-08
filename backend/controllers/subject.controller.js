import { Subject } from "../models/subjects.schema.js"

export const createSubjects = async(req,res)=>{
    await Subject.create({
        subjectname:req.body.subjectname,
        duration:req.body.duration
    })
    return res.json({message:'subject created successfully!!'})
}

