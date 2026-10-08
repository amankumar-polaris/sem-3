import z, { email } from "zod";

export const validatInfo = z.object({
    firstName:z.string('Enter your firstname properly').trim().min(3,'Name must be of length 3'),
    lastName:z.string('Enter your lastname properly').min(3,'Name must be of length 3'),
    age:z.int(),
    password:z.string().min(10),
    email:z.email().refine((e)=>e.endsWith('polariscampus.com'))
    // email:z.email()
})