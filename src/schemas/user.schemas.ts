import {z} from "zod"

function isPasswordSafe(value:any) {
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const symbolRegex = /[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;

    return lowercaseRegex.test(value) && uppercaseRegex.test(value) && numberRegex.test(value) && symbolRegex.test(value);
}

const createUserSchema = z.object({
    uuid: z.string(),
    name: z.string(),
    email: z.string(),
    password: z.string().refine(value => isPasswordSafe(value), {
        message: "Password must contain at least one lowercase letter, one uppercase letter, one number, and one symbol"
    }),
    phoneNumber: z.string(),
});


const returnUserSchema = createUserSchema.omit({
    password: true
})

const returnUsersSchema = z.array(returnUserSchema)

export {createUserSchema, returnUserSchema,returnUsersSchema }