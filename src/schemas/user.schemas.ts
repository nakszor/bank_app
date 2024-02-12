import {z} from "zod"
import AppError from "../errors/appError";

function isPasswordSafe(value:any) {
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const symbolRegex = /[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;

    return lowercaseRegex.test(value) && uppercaseRegex.test(value) && numberRegex.test(value) && symbolRegex.test(value);
}

const createUserSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string().min(8).refine(value => isPasswordSafe(value), {
        message: "Password must contain at least one lowercase letter, one uppercase letter, one number, and one symbol"
    }),
    phoneNumber: z.string(),
});

const updateUserSchema = z.object({
    name: z.string().max(250).optional(),
    email: z.string().max(150).email().optional(),
    password: z.string().max(150).optional(),
    phoneNumber: z
      .string()
      .max(15)
      .min(10)
      .refine(value => /^\d+$/.test(value), {
        message: 'phoneNumber deve conter apenas números'
      }).optional()
}).refine(obj => {
    if (!('name' in obj) && !('email' in obj) && !('password' in obj) && !('phoneNumber' in obj)) {
      throw new AppError('Pelo menos um dos campos "name", "email", "password" ou "phoneNumber" é necessário', 400);
    }
    return true;
});

const returnUserSchema = createUserSchema.omit({
    password: true
});

const returnUsersSchema = z.array(returnUserSchema);

export {createUserSchema, returnUserSchema,returnUsersSchema, updateUserSchema };