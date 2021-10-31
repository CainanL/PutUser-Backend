import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ShowUserProfileController } from "./ShowUserProfileController";
import { ShowUserProfileUsecase } from "./ShowUserProfileUseCase";

const usesRepository = UsersRepository.getInstance();
const showUsersProfileUseCase = new ShowUserProfileUsecase(usesRepository);
const showUsersProfileController = new ShowUserProfileController(showUsersProfileUseCase);

export { showUsersProfileController };