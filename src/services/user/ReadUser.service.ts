import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IUserRepo, IUsers } from "../../interfaces/user.interfaces";
import { returnUsersSchema } from "../../schemas/user.schemas";

export const readUserService = async (): Promise<IUsers> => {
  
  const userRepository: IUserRepo = AppDataSource.getRepository(User);
  
  const users: User[] = await userRepository.find();
  
  const returnUsers: IUsers = returnUsersSchema.parse(users)

  return returnUsers
};