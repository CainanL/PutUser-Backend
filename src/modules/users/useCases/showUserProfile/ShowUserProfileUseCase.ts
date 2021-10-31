import { User } from "../../models/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
    id: string;
}

class ShowUserProfileUsecase {

    constructor(private usersRepository: UsersRepository) { };

    execute({id}: IRequest): User{
        const user = this.usersRepository.findById(id);
        if(!user) throw Error('Urser do not exists!');

        return user;
    }

}

export { ShowUserProfileUsecase };