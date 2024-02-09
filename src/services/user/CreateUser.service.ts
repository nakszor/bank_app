import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IUserRepo } from "../../interfaces/user.interfaces";

export const createUserService = async (userData: {}) => {
 
  const userRepository: IUserRepo = AppDataSource.getRepository(User);

  const newUser = userRepository.create({...userData});

  const savedUser = await userRepository.save(newUser);

  return savedUser;
};