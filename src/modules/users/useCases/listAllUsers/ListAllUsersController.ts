import { ListAllUsersUseCase } from "./ListAllUsersuseCase";
import {Request, Response} from 'express';

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) { };

    handle(request: Request, response: Response): Response{
        const {id} = request.headers;
        
        const users = this.listAllUsersUseCase.execute({id});
        
        return response.json({users});
    }
}

export { ListAllUsersController };