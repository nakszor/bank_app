import { Router } from "express";
import { createUserController, readUserController, updateUserController } from "../controllers/users.controllers";
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

usersRouter.patch("/:uuid", updateUserController)

export default usersRouter;
