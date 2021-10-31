import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";
import { Request, Response} from 'express';

class TurnUserAdminController {

    constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { };

    handle(request: Request, response: Response): Response{

        const {id} = request.params;

        const user = this.turnUserAdminUseCase.execute({id});

        return response.json(user);
    }

}

export { TurnUserAdminController };