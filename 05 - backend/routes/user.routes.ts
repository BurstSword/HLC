<<<<<<< HEAD
import { Router } from "express";
=======
import {Router } from "express";
>>>>>>> main
import userController from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.get('/getGreeting',userController.prototype.getGreeting);
userRoutes.post('/testPost',userController.prototype.testPost);
userRoutes.post('/register',userController.prototype.register);


export default userRoutes;
