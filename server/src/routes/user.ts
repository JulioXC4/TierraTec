import express from "express";
import {
    createUser,
    getUsers,
} from '../controllers/user'
import { verifyAccessToken, verifyAdminAccessToken } from "../middlewares/middlewares";

const userRouter = express.Router()

/* userRouter.get('/createuser', createUser)
userRouter.get('/user', verifyAccessToken, getUserById)
userRouter.get('/users', verifyAdminAccessToken, getUsers)
userRouter.patch('/update', verifyAccessToken, updateUser) */
userRouter.post('/createuser', createUser)
userRouter.get('/users', getUsers)


export default userRouter;