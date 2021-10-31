import { Router } from "express";
import { userRouter } from "./users/users.router";

const router = Router();

router.use('/users', userRouter);

export {router};