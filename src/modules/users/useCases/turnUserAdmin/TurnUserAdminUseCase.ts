import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class NotFoundError extends Error {
  constructor(message: string) {
    super()
    this.name = "404";
    this.message = message;
  }
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    let user = this.usersRepository.findById(user_id);
    if (!user) throw "User not Found.";
    user = this.usersRepository.turnAdmin(user);
    return user;
  }
}

export { TurnUserAdminUseCase };
