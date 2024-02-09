import { Router } from "express";
import { createUserService } from "../services/user/CreateUser.service";
import { readUserService } from "../services/user/ReadUser.service";

export const usersRouter = Router();

usersRouter.post(
    "/users",
    createUserService
  );
  
usersRouter.get(
  "/users",
  readUserService
);

