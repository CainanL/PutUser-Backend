import { ShowUserProfileUsecase } from "./ShowUserProfileUseCase";
import {Request, Response} from 'express';

class ShowUserProfileController {

    constructor(private showUserProfilerUseCase: ShowUserProfileUsecase) { };

    handle(request: Request, response: Response): Response{
        const {id} = request.params;
        
        const user = this.showUserProfilerUseCase.execute({id});
        
        return response.json(user);
    }

}

export { ShowUserProfileController };