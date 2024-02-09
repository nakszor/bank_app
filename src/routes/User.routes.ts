import { Router } from "express";
import { createUserService } from "../services/user/CreateUser.service";
import { readUserService } from "../services/user/ReadUser.service";
import { readUserController } from "../controllers/users.controllers";

const usersRouter = Router();

usersRouter.post("",
    createUserService
  );
  
usersRouter.get(
  "",
  readUserController
);

export default usersRouter;
