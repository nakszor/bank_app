import { Request, Response } from 'express'
import { readUserService } from "../services/user/ReadUser.service"
import { createUserService } from '../services/user/CreateUser.service'

export const createUserController = async (req: Request, res:Response) =>{
    
    const newUser = req.body

    const data = await createUserService(newUser)

    return res.status(201).json(data)
}

export const readUserController = async (req: Request, res:Response) =>{
   
    const users = await readUserService()

    return res.status(200).json(users)
}
