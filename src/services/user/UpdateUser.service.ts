import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import AppError from "../../errors/appError";
import { IUser, IUserUpdate, IUserRepo } from "../../interfaces/user.interfaces";
import { returnUserSchema } from "../../schemas/user.schemas";

export const updateUserService = async (newData: IUserUpdate, userId: string) => {
    
    const userRepository: IUserRepo = AppDataSource.getRepository(User);
  
    const userToUpdate = await userRepository.findOneBy({
      uuid: userId
    });
  
    const updatedUserInfo  = {
        ...userToUpdate!,
        ...newData,
    };
  
    const updatedUser = userRepository.create(updatedUserInfo);
  
    await userRepository.save(updatedUser);
  
    return updatedUser;
  };