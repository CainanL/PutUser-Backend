import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ListAllUsersController } from "./ListAllUsersController";
import { ListAllUsersUseCase } from "./ListAllUsersuseCase";


const usersRepository = UsersRepository.getInstance();
const listAllUsersUseCase = new ListAllUsersUseCase(usersRepository);
const listAllUsersController = new ListAllUsersController(listAllUsersUseCase);

export { listAllUsersController };