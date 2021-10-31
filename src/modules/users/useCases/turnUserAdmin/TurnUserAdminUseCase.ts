import { User } from "../../models/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest{
    id: string;
}

class TurnUserAdminUseCase {

    constructor(private userRepository: UsersRepository) { };

    execute({id}: IRequest): User{
        const user = this.userRepository.findById(id);
        if(!user) throw Error('User do not exists');

        const newUserAdmin = this.userRepository.turnAdmin(user);
        return newUserAdmin;
    }

}

export { TurnUserAdminUseCase }