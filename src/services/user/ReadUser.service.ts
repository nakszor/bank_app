import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IUserRepo } from "../../interfaces/user.interfaces";

export const readUserService = async () => {
  const userRepository: IUserRepo = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  return users;
};