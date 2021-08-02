import { UserRepository } from '../../db/repository';
import { CreateUserRequest } from '../../interface';
import { cryptoPassword } from '../../lib';

export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  public async createUser(request: CreateUserRequest) {
    await this.userRepository.createUser(request.name, request.id, await cryptoPassword(request.password));
  }

  public async findOneById(id: string) {
    return await this.userRepository.findOneById(id);
  }

  public async login(request: CreateUserRequest) {
    return await this.userRepository.findOneByIdAndPassword(request.id, await cryptoPassword(request.password));
  }
}
