import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IUser, IUserCreate, IUserRepo } from "../../interfaces/user.interfaces";
import { returnUserSchema } from "../../schemas/user.schemas";

export const createUserService = async (userData:IUserCreate): Promise<IUser> => {

  const userRepository: IUserRepo = AppDataSource.getRepository(User);

  const newUser: User = userRepository.create(userData);

  const savedUser: User = await userRepository.save(newUser);
  
  const returnUser: IUser = returnUserSchema.parse(savedUser)

  return returnUser
};