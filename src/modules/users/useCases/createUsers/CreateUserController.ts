import { CreateUserUseCase } from "./CreateUserUseCase";
import {Request, Response} from 'express';

class CreateUserController {

    constructor(private createUserUseCase: CreateUserUseCase) { };

    handle(request: Request, response: Response): Response{
        const {name, email} = request.body;
        
        const user = this.createUserUseCase.execute({name, email});
        if(!user) return response.status(400).json(user);
        return response.status(201).json(user);
    }
}

export { CreateUserController };