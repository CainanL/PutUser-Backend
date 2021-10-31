import { User } from "../models/User";

interface ICreateUserDTO {
    name: string;
    email: string;
}

interface IUsersRepository{
    create({name, email}: ICreateUserDTO): User;
    list(): User[];
    findById(id: string): User;
    findByEmail(email: string): User;
    turnAdmin(user: User): User
}   

export { ICreateUserDTO, IUsersRepository };