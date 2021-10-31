import { User } from "../../models/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
    name: string;
    email: string;
}

class CreateUserUseCase{
    //construtor do repositório do que será feito
    constructor(private usersRepository: UsersRepository){};

    execute({name, email}: IRequest): User{
        const userAlreadExists = this.usersRepository.findByEmail(email);
        if (userAlreadExists) throw Error("User alread exists!");

        const user = this.usersRepository.create({name, email});
        return user;
    }
}

export {CreateUserUseCase};