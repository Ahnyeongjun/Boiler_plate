import { EntityRepository, getRepository, Repository } from 'typeorm';
import { User } from '../entity';

@EntityRepository(User)
export class UserRepository {
  public async createUser(name: string, id: string, password: string) {
    try {
      await getRepository(User).createQueryBuilder().insert().into(User).values({ name, id, password }).execute();
    } catch (e) {}
  }

  public async findOneByPassword(password: string) {
    try {
      return getRepository(User)
        .createQueryBuilder()
        .where('user.password = :passowrd', {
          password: password,
        })
        .getOne();
    } catch (e) {
      console.log(e);
    }
  }

  public async findOneById(id: string) {
    try {
      return await getRepository(User)
        .createQueryBuilder()
        .where('user.id = :id', {
          id: id,
        })
        .getOne();
    } catch (e) {
      console.log(e);
    }
  }

  public async findOneByName(name: string) {
    try {
      return getRepository(User)
        .createQueryBuilder()
        .where('user.name = :name', {
          name: name,
        })
        .getOne();
    } catch (e) {}
  }

  public async findOneByIdAndPassword(id: string, password: string) {
    try {
      return getRepository(User).createQueryBuilder().where('user.id = :id').andWhere('user.password = :password').setParameters({ id: id, password: password }).getOne();
    } catch (e) {}
  }
}
