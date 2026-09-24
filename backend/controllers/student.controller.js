import { Student } from "../models/student.schema.js"

export const findStudents = async(req,res)=>{
   const student = await Student.find()

    return res.status(200).json(student)
}

export const findFullName = async(req,res)=>{
    const student = await Student.findOne({email:req.body.email})

    if(!student)
        return res.status(404).json({message:'student not found'})

    return res.status(200).json({fullname:student.fullname})

}

export const login = async(req,res)=>{
    const student = await Student.findOne({email:req.body.email})

    if(!student)
        return res.status(404).json({message:'student not found'})

    const isMatch = await student.comparePassword(req.body.password)

    if(!isMatch)
        return res.status(401).json({message:"invalid credential!!"})

    return res.status(200).json({message:"student found"})
}

export const createStudent = async(req,res)=>{
    const {firstname,lastname,email,skills,profession,password} = req.body
    await Student.create({firstname,lastname,email,skills,profession,password})

    return res.status(200).json({message:"student created successfully"})
}

export const findStudentByEmail = async(req,res)=>{
    // const student = await Student.findByEmail(req.body.email)
    const student = await Student.fin

    if(!student)
        return res.status(401).json({message:"Invalid email"})

    return res.status(200).json(student)
}

export const findStudent = async(req,res)=>{
    const student = await Student.aggregate([
        //stage1
        {
            $match:
            {
                profession:"Software Development",
                age:{$gt:"20"}
            }
        },
        //stage2
        {
            $project:
            {
                firstname:1,
                lastname:1,
                age:1
            }
        },
        // //stage3
        {
            $group:
            {
                _id:null,
                totalAge:
                {
                    $sum:"$age"
                },
                averageAge:{
                    $avg:"$age"
                },
                totalStudent:{
                    $sum:1
                },
                maxAge:
                {
                    $max:"$age"
                },
                minAge:
                {
                    $min:"$age"
                }
            }
        }
    ])
    return res.json(student)
}

export const updateAge = async (req, res) => {
  try {
    const result = await Student.updateMany(
      {},
      [
        {
          $set: {
            age: { $toInt: "$age" }
          }
        }
      ],
      {
        updatePipeline: true
      }
    );

    res.json({
      message: "Age updated successfully",
      result
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
};