import {Request,Response, Router } from "express";
import userController from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.get('/getGreeting',userController.prototype.getGreeting);
userRoutes.post('/testPost',userController.prototype.testPost);

export default userRoutes;
