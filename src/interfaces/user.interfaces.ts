import { Repository } from "typeorm";
import { User } from "../entities";
import { createUserSchema, returnUserSchema, returnUsersSchema } from "../schemas/user.schemas";
import { z } from "zod";

export type IUserRepo = Repository<User>;
export type IUserCreate = z.infer<typeof createUserSchema>;
export type IUser = z.infer<typeof returnUserSchema>;
export type IUsers = z.infer<typeof returnUsersSchema>;