import { Router } from "express";
import { createUserController, readUserController } from "../controllers/users.controllers";

const usersRouter = Router();

usersRouter.post("",
    createUserController
  );
  
usersRouter.get(
  "",
  readUserController
);

export default usersRouter;
