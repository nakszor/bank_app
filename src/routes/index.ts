import { Router } from "express";

import  usersRouter  from "./User.routes";

const router = Router();

router.use("/users", usersRouter);

export default router;