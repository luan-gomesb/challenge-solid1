import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    const userByMail = this.usersRepository.findByEmail(email);
    if (!userByMail) {
      const newUser = this.usersRepository.create({ email, name });
      return newUser;
    } else {
      throw new Error("Email Already been taken");
    }
  }
}

export { CreateUserUseCase };
