import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest{
    id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: UsersRepository) { };

    execute({id}: IRequest){

        const user = this.usersRepository.findById(id);
        if(!user) throw Error("User do not exists!");
        if(user.admin == false) throw Error("User it's not admin!");

        const users = this.usersRepository.list();
        return users;
    }
}

export { ListAllUsersUseCase };