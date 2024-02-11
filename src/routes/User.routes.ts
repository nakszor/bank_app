import { Router } from "express";
import { createUserController, readUserController } from "../controllers/users.controllers";
import { validateDataMiddleware } from "../middlewares";
import { createUserSchema } from "../schemas/user.schemas";

const usersRouter = Router();

usersRouter.post("",validateDataMiddleware(createUserSchema),
    createUserController
  );
  
usersRouter.get(
  "",
  readUserController
);

export default usersRouter;
