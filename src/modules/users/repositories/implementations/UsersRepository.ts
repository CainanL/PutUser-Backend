import { User } from "../../models/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";


class UsersRepository implements IUsersRepository {

    private users: User[];

    private static INSTANCE: UsersRepository;

    constructor() {
        this.users = [];
    }

    public static getInstance() {
        if (!this.INSTANCE) UsersRepository.INSTANCE = new UsersRepository();
        return UsersRepository.INSTANCE;
    }

    create({name, email}: ICreateUserDTO){
        const user = new User()

        Object.assign(user, {
            name,
            admin: false,
            email,
            created_at: new Date(),
            updated_at: new Date()
        })

        this.users.push(user);
        return user;
    }

    list(){
        return this.users;
    }

    findById(id: string){
        const user = this.users.find(user => user.id == id);
        return user;
    }

    findByEmail(email: string){
        const user = this.users.find(user => user.email == email);
        return user;
    }

    turnAdmin(user: User){
        const selectedUser = this.users.find(selectedUser => selectedUser == user);
        selectedUser.admin = true;
        selectedUser.updated_at = new Date();
        return selectedUser;
    }


}

export { UsersRepository };