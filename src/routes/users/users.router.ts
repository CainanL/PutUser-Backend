import { request, response, Router } from "express";
import { createUsersController } from "../../modules/users/useCases/createUsers";
import { listAllUsersController } from "../../modules/users/useCases/listAllUsers";
import { showUsersProfileController } from "../../modules/users/useCases/showUserProfile";
import { turnUserAdminController } from "../../modules/users/useCases/turnUserAdmin";



const userRouter = Router();

userRouter.post('/', (request, response)=>{
    createUsersController.handle(request, response);
})

userRouter.patch('/:id/admin', (request, response)=>{
    turnUserAdminController.handle(request, response);
})

userRouter.get('/:id', (request, response)=>{
    showUsersProfileController.handle(request, response);
})

userRouter.get('/', (request, response)=>{
    listAllUsersController.handle(request, response);
})

export {userRouter};