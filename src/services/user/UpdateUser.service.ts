import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IUserUpdate, IUserRepo } from "../../interfaces/user.interfaces";
import { returnUserSchema } from "../../schemas/user.schemas";

const updateUserService = async (newUserData: IUserUpdate, userId: string) => {
    
    const userRepository: IUserRepo = AppDataSource.getRepository(User);
  
    const query = userRepository.createQueryBuilder()
    .update(User)

    if (newUserData.name) {
     query.set({ name: newUserData.name })
    }

    if (newUserData.email) {
        query.set({ email: newUserData.email })
    }

    if (newUserData.password) {
        query.set({ password: newUserData.password })
    }

    if (newUserData.phoneNumber) {
        query.set({ phoneNumber: newUserData.phoneNumber })
    }

    query.where("uuid = :userId", { userId })

    await query.execute()
    
    const updatedUser = await userRepository.findOneBy({
        uuid: userId
    })

    if (!updatedUser) {
        throw new Error('Failed to update user')
    }

    const returnUpdatedUser = returnUserSchema.parse(updatedUser)
    
    return returnUpdatedUser
}
export default updateUserService